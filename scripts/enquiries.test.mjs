import { readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
import test from 'node:test'
import ts from 'typescript'

const source = await readFile(new URL('../src/services/enquiries.ts', import.meta.url), 'utf8')
async function service(endpoint) {
  const configured = source.replace(/import \{ DEFAULT_ENQUIRY_ENDPOINT \} from '..\/config\/enquiries'/, "const DEFAULT_ENQUIRY_ENDPOINT = 'https://formsubmit.co/ajax/info@onboardlogisticsltd.com'").replace(/import\.meta\.env\.VITE_(CONTACT|QUOTE)_ENDPOINT/g, JSON.stringify(endpoint))
  const { outputText } = ts.transpileModule(configured, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2023 } })
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)
}

test('enquiry delivery acknowledges receipt and handles delivery failures', async t => {
  globalThis.window = globalThis
  const originalFetch = globalThis.fetch
  const api = await service('/test-enquiries')
  t.after(() => { globalThis.fetch = originalFetch; delete globalThis.window })

  await t.test('missing configuration never sends a request', async () => {
    globalThis.fetch = () => { throw new Error('Unexpected network request') }
    await assert.rejects((await service('')).submitContactEnquiry({ email: 'a@example.com' }), /has not been sent/)
  })
  await t.test('both forms send all fields and use the email as reply address', async () => {
    let payload
    globalThis.fetch = async (url, options) => {
      assert.equal(url, '/test-enquiries')
      assert.equal(options.method, 'POST')
      payload = JSON.parse(options.body)
      return Response.json({ ok: true })
    }
    await api.submitContactEnquiry({ email: ' a@example.com ', message: 'Cargo enquiry' })
    assert.equal(payload.email, 'a@example.com')
    assert.equal(payload.message, 'Cargo enquiry')
    await api.submitFreightQuote({ businessEmail: ' b@example.com ', tonnage: '20', destination: 'Kampala' })
    assert.equal(payload.email, 'b@example.com')
    assert.equal(payload.tonnage, '20')
    assert.equal(payload.destination, 'Kampala')
  })
  for (const [name, response, message] of [
    ['rate limit', () => new Response('', { status: 429 }), /wait a moment/],
    ['server failure', () => new Response('', { status: 500 }), /could not accept/],
    ['HTML fallback', () => new Response('<html>index</html>'), /Unable to confirm/],
    ['activation required', () => Response.json({ success: 'true', message: 'This form needs Activation' }), /awaiting activation/],
    ['negative acknowledgement', () => Response.json({ ok: false }), /did not confirm/],
  ]) {
    await t.test(name, async () => {
      globalThis.fetch = async () => response()
      await assert.rejects(api.submitContactEnquiry({ email: 'a@example.com' }), message)
    })
  }
  await t.test('FormSubmit string acknowledgement', async () => {
    globalThis.fetch = async () => Response.json({ success: 'true' })
    await api.submitContactEnquiry({ email: 'a@example.com' })
  })
  await t.test('network failure', async () => {
    globalThis.fetch = async () => { throw new TypeError('Failed to fetch') }
    await assert.rejects(api.submitContactEnquiry({ email: 'a@example.com' }), /Check your connection/)
  })
})
