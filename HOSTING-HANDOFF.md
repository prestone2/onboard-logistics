# Onboard Logistics — hosting handoff

The source code is ready to hand to the hosting administrator. Deployment and real inbox delivery have not been verified.

## Build and publish

1. Install a Node.js version supported by the locked Vite release (Node.js 22.12+ recommended).
2. Run `npm ci`.
3. Run `npm run build` and `npm run lint`.
4. Publish the contents of `dist/`. Rebuild from source rather than relying on an old `dist/` folder.

The canonical origin is `https://www.onboardlogisticsltd.com`. It is already configured in source. `.env.example` documents optional build-time overrides. All `VITE_` values are public browser configuration; never put passwords or private API keys in them.

## Hosting administrator responsibilities

- Configure the domain, DNS and HTTPS, with the apex domain redirecting to `https://www.onboardlogisticsltd.com`.
- Serve generated route files such as `dist/about/index.html` for direct page requests. Serve `dist/404.html` with HTTP status 404 for unknown paths; do not rewrite every unknown request to the homepage with status 200.
- If applying a Content Security Policy, permit form fetch requests to `https://formsubmit.co` in `connect-src`. Keep a referrer policy that sends the site origin on HTTPS requests, such as `strict-origin-when-cross-origin`, for the form delivery service.
- Check mobile navigation, direct page URLs, assets, canonical URLs, `robots.txt`, `sitemap.xml` and unknown-page behavior after deployment.

## Contact and quote email activation

Both forms are configured to use FormSubmit AJAX and deliver to `info@onboardlogisticsltd.com`. No SMTP password or private email API key is needed. The recipient mailbox must exist and be accessible.

1. Send a clearly labelled test enquiry from the hosted contact page.
2. Check the recipient inbox and spam folder for FormSubmit's activation email and follow its activation link.
3. After activation, send new tests from both Contact and Request a Quote. Do not rely on the activation submission being delivered as a normal enquiry.
4. Confirm both emails arrive with the correct contact/shipment fields and that Reply uses the visitor's email address.
5. Check that failures preserve entries and show an error. A service acknowledgement alone does not prove inbox delivery.

No live test email was sent during development. Inbox activation and actual delivery remain pending. Do not advertise the forms as fully verified until those checks pass.

Optional endpoint overrides are `VITE_CONTACT_ENDPOINT` and `VITE_QUOTE_ENDPOINT`. These are compiled into the build, so changing them requires rebuilding. Defaults are already configured in `src/config/enquiries.ts`.

## Content and privacy

The owner has approved the existing company content and metrics. Privacy and Terms were newly drafted and remain marked noindex during review. Confirm their final wording and update the hosting-specific privacy details when the hosting provider and its logging/retention practices are known. The Privacy page describes FormSubmit processing and its documented submission archive.

## Checks completed locally

- Production build and lint passed.
- Mocked delivery tests passed: `node scripts/enquiries.test.mjs`.
- Mobile Chrome rendering of Privacy was checked.

Full deployed browser checks, hosting behavior, mailbox activation and real email delivery remain the hosting handoff tasks. No hosting or DNS changes were made.
