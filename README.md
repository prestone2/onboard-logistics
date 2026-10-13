# Onboard Logistics Ltd — Homepage and Core Corporate Pages

Production-ready static corporate website for Onboard Logistics Ltd, Uganda. The existing Vite, React 19, TypeScript, Tailwind CSS 4, React Router, Framer Motion and Lucide architecture is preserved. The public site includes corporate pages, locally prepared contact and quote flows, and legal shells. No backend or enquiry delivery is connected.

## Development

```sh
npm install
npm run dev
npm run build
npm run lint
```

TypeScript strict mode is enabled. Tailwind is integrated through its Vite plugin. There is no existing test runner or test suite.

## Architecture

- `src/routes/AppRoutes.tsx`: route definitions and shared layout.
- `src/components/layout/`: sticky header, accessible mobile navigation, footer, site layout and secondary page shell.
- `src/components/ui/`: container, router-link button, page heading and dependency-free SEO component.
- `src/components/sections/home/`: hero, trust metrics, corporate positioning, core services, regional corridors, a schematic route network, fleet and technology, safety and compliance, and enterprise quote CTA.
- `src/pages/`: homepage, corporate pages, sustainability, careers, contact, quote and legal pages.
- `src/data/`: centralized company copy, metrics and navigation.
- `src/hooks/`: passive scroll state.
- `src/styles/global.css`: established brand tokens, responsive layout, typography and motion preferences; `src/styles/home.css`: scoped Phase 1B section layouts; `home-completion.css` and `footer.css`: Phase 1C sections and corporate footer.
- `src/types/`: company metric, homepage intro, service and corridor types.
- `src/assets/brand/`, `src/assets/images/`: bundled local assets. `src/lib/` is reserved for future utilities; none are currently needed.

## Routes

`/`, `/about`, `/services`, `/regional-corridors`, `/fleet-technology`, `/safety-compliance`, `/sustainability`, `/careers`, `/request-quote`, `/contact`, `/privacy`, `/terms` and a wildcard 404. The production build prerenders route-specific HTML. Configure hosting to serve each generated route file on direct requests and return `404.html` with an HTTP 404 status for unknown paths.

## Assets and content awaiting approval

- Real supplied logo: `src/assets/brand/onboard-logistics-logo.png`, moved from the original assets directory without changing its artwork. A white backing preserves legibility over the hero.
- **Illustrative AI-generated hero placeholder:** `src/assets/images/hero-freight-placeholder.webp`. Replace with an approved company truck/road photograph, ideally landscape with the truck on the right and space for text on the left. Replace the file or update the import and dimensions in `HeroSection.tsx`; update its descriptive alt text as well. The placeholder does not depict a verified Onboard fleet asset. Generated with the built-in imagegen tool and converted to WebP for delivery.
- Image prompt: “Wide 16:9 photorealistic editorial image of an unbranded white articulated freight truck pulling a red shipping container on a paved regional highway through green East African hills, subdued late-afternoon daylight, truck on right half and quiet landscape on left for text; no writing, logos, signs or watermarks. Illustrative stock-like placeholder, not an actual company fleet photograph.”
- Verify every claim in `src/data/company.ts` before production launch, especially annual safe kilometers, 100% fleet coverage and the scope of 24/7 monitoring. The supplied figures are centrally editable and marked in a comment.
- The sustainability, careers, contact and quote pages are implemented with page-specific SEO. Privacy and Terms remain page shells. Quote and contact forms prepare submissions locally but do not send or store data.
- Typography uses Manrope from Google Fonts with system fallbacks. The font stylesheet is an external request; self-host the approved font files if deployment policy requires eliminating third-party font requests.

## Responsive and accessible behavior

Desktop hero is at least 760px tall. Container gutters, heading sizes and images adapt to small screens. Buttons stack on mobile; metrics use five columns on desktop, three on tablet and two on mobile. Full desktop navigation begins at 1360px to keep all nine links legible; narrower screens use a menu.

Navigation uses React Router links and active states. Mobile navigation uses a modal dialog, focus trap, inert background, body scroll lock, Escape dismissal, focus restoration and automatic closure when switching to desktop width. Includes a skip link, visible focus rings, landmark elements, one page heading, descriptive hero alt text and reduced-motion support. Route-specific title, description, canonical, Open Graph, Twitter and JSON-LD metadata are rendered at build time and refreshed on client navigation.

## Verification

Run `npm run build` and `npm run lint`. Browser viewport verification targets 375, 430, 768, 1024, 1280, 1440 and 1920px. In the implementation sandbox, browser verification could not run: Vite network binding and Chrome socket access were denied. Visually check these sizes in a normal local environment before launch.

Implementation checks passed: production build, lint with no warnings, and an isolated React render smoke check of all ten routes plus wildcard 404, shared landmarks, one H1 per page, five trust metrics and both homepage CTA destinations. This render check does not validate browser interactions or visual layout.

## Phase 1B handoff

The existing hero, trust metrics, routing, layout and all secondary page shells are preserved. Added:

- `CorporatePositioning.tsx`: asymmetric editorial text/image split and four compact capability statements.
- `CoreServices.tsx`: one featured freight service photograph and three structured service rows; all four links route to `/services`.
- `RegionalCorridors.tsx` and `CorridorNetwork.tsx`: regional preview with four routes independently originating at Mombasa. The SVG is a schematic, not a GIS map or sequential itinerary. No distances or transit times are asserted.
- `src/data/home.ts` and `src/types/home.ts`: typed centralized section copy, capability signals, services and corridors, with a client-verification comment.
- `src/styles/home.css`: light/dark/light section rhythm, shared container alignment, restrained typography, borders and hover effects.

Desktop uses split layouts. At widths below 900px the positioning, services and corridor layouts stack. Capability signals become two columns below 1101px. Mobile retains full-width imagery and readable service rows; the route diagram scales as a single network and is accompanied by a text route list. No future sections or full secondary page designs were added.

Accessibility: named sections, H2 section titles, H3 service/corridor titles, meaningful router-link labels, descriptive photo alt text, decorative SVG hidden from assistive technology, equivalent route information in an HTML list and inherited visible focus styles. Only the positioning entrance uses Framer Motion (20px translate, once); reduced motion disables it and the image/arrow hover transforms. Both below-fold photos use lazy loading and explicit intrinsic dimensions.

### Operations image placeholder

`src/assets/images/operations-yard-placeholder.webp` is an illustrative AI-generated asset, **not a photograph of verified Onboard assets**. Generated with the built-in imagegen tool, then converted to WebP (1536×1024). Replace with client-approved operations yard or terminal photography; update its import, intrinsic dimensions and alt text in `CorporatePositioning.tsx`. The services preview reuses the existing freight placeholder; replace that with approved photography as already described above. Verify the new capability statements and corridor coverage in `src/data/home.ts` before launch.

Final generation prompt:

> Photorealistic editorial photograph, landscape 3:2, for an East African corporate logistics website. Illustrative logistics operations yard, not any real company's fleet. Two unbranded white heavy articulated trucks with container trailers parked in a clean working freight terminal, red and charcoal shipping containers in background, lush East African rolling hills beyond, a small distant worker wearing safety vest and helmet walking in a designated lane, subdued natural morning light. Eye-level documentary photograph, realistic transport equipment, sober premium industrial composition, clear operational scene, no dramatic filters, no logos, no readable writing, no watermark. Truck facing camera on right-center, depth across the terminal, restrained natural colors.

### Phase 1B validation

- `npm run build`: passed (strict TypeScript and production Vite build).
- `npm run lint`: passed with no warnings.
- Isolated React render checks: passed for homepage section order, one H1, four capabilities, four services, four independent Mombasa route origins, lazy-loaded images, all nine unchanged secondary shells and wildcard 404.
- No existing test suite or test script was found.
- Browser viewport and interactive checks remain pending because this sandbox denies preview-server binding and browser socket access. The render checks do not prove visual layout or browser interaction behavior.

## Phase 1C handoff

The homepage now ends with `FleetTechnology.tsx`, `SafetyCompliance.tsx` and `EnterpriseQuoteCTA.tsx`. Existing Phase 0/1A/1B sections are preserved. Backgrounds progress from the light corridor section to navy fleet oversight, white safety, charcoal quote CTA and the near-white corporate footer.

`src/data/home.ts` holds the new fleet/safety intros, four fleet capabilities, four safety controls, captions and quote CTA copy. `src/types/home.ts` adds typed operational controls and footer links. `src/data/footer.ts` centralizes the positioning statement, city-level contact location, Company/Services/Regional Network navigation, contact links and legal links. The real logo is retained. No phone number, email, street address or live tracking data is presented.

Privacy and Terms use the existing `PageShell` and SEO `noindex` behavior. Their approved content remains pending; the existing nine secondary page shells are unchanged.

### Responsive and accessible completion

Fleet, safety and quote layouts stack below 900px. New lists retain readable numbered rows rather than shrinking into cards. Photos retain intrinsic dimensions and are lazy-loaded. The footer uses five columns on desktop, an identity row plus four link columns below 1101px, and two link columns on mobile. Quote links stack on small screens. There is no operations dashboard or interactive monitoring panel.

Sections have accessible names, H2 section headings and H3 control headings. Footer navigation groups have labeled landmarks. Decorative numbering and the quote accent line are hidden from assistive technology. All navigation uses router links and inherits visible focus states. New sections use no motion, continuous effects or hover-image animations.

### Client confirmation and assets

- Confirm the blueprint-supplied tracking coverage, fleet integration, fuel oversight, centralized telemetry and safety procedures in `src/data/home.ts` before launch. A verification comment marks these claims. The copy avoids guarantees, exact maintenance intervals, inspection counts, curfews, immobilization claims and accident outcomes.
- Confirm the Kampala office location before adding a full address or contact details. The footer currently uses the user-supplied city-level location only.
- New `src/assets/images/dispatch-oversight-placeholder.webp` (1536×1024) is an illustrative AI-generated dispatch scene, not an Onboard facility, actual software interface or live operational data. Generated using the built-in imagegen tool and converted to WebP. Replace with approved dispatch/fleet oversight photography; update import, dimensions, alt text and caption in `FleetTechnology.tsx` / `src/data/home.ts`.
- Safety reuses `operations-yard-placeholder.webp`, which also needs approved client photography. Existing freight placeholders and pending legal copy remain outstanding.

Final dispatch image prompt:

> Photorealistic editorial photograph for a premium East African logistics corporate website, landscape 3:2. Illustrative freight dispatch office, not a real company office. A professional East African logistics coordinator wearing a navy shirt, seated at an organized workstation, viewed three-quarter from behind, looking towards two desktop screens. Screens softly out of focus with only simple indistinct route lines, absolutely no legible text, numbers, charts, statistics or identifiable software. Large window beyond overlooking a freight yard with white unbranded container trucks. Natural subdued daylight, sober corporate atmosphere, realistic documentary photography, charcoal and neutral office materials, warm skin tones. Composition prioritizes human operational oversight and the fleet in background, no holograms or futuristic elements, no logos, no watermark. One image only.

### Phase 1C validation

- `npm run build`: passed, including strict TypeScript.
- `npm run lint`: passed with no warnings.
- React render checks: passed for all eight homepage sections in the required order, a single H1, four fleet and four safety controls, both CTA destinations, corporate footer links, no phone/email placeholders, four lazy-loaded below-fold photos, eleven secondary/legal shells and wildcard 404.
- No existing test runner or test suite is configured.
- Browser checks at 375, 430, 768, 1024, 1280, 1440 and 1920px remain pending due to the sandbox's preview-server and browser socket restrictions. Render checks do not prove visual layout, horizontal overflow or interactive browser behavior.

## Phase 2A — Core corporate pages

Completed `/about`, `/services`, `/regional-corridors`, `/fleet-technology` and `/safety-compliance`. Homepage sections and existing routing remain intact. No dedicated service subpages, backend, live tracking, CMS, analytics or advanced SEO were added.

### Components and architecture

- `components/layout/InternalPageHero.tsx`: shared H1/intro pattern with optional accessible breadcrumbs, optional local image and dark/light variants.
- `components/sections/shared/EnterpriseCTA.tsx`: shared closing CTA with quote/contact router links; corridors use the supplied cross-border heading variant.
- `components/sections/shared/EditorialPhoto.tsx` and `EditorialList.tsx`: consistent photography and numbered editorial rows.
- `components/sections/corridors/CorridorRouteMap.tsx`: expanded schematic with four independent routes from Mombasa, destination notes and an equivalent HTML route list.
- `components/sections/fleet/OperationalIllustration.tsx`: static, explicitly labeled example interface using only supplied vehicle/route/status examples. It contains no live data, timestamps, speeds or driver information.
- `data/about.ts`, `services.ts`, `corridors.ts`, `fleet.ts`, `safety.ts`: typed corporate copy and structured content.
- `data/pageImages.ts`: existing local placeholder image references with dimensions and descriptive alt text.
- `data/shared.ts`: shared CTA copy.
- `types/corporate.ts`: page intros, image references, editorial sections/items, service details, corridor details and illustrative fleet rows.
- `styles/corporate.css`: isolated inner-page styles using existing brand tokens and containers.

Each page has its own visual rhythm: About uses storytelling and mission/vision editorial blocks; Services uses large numbered scope sections and a five-stage vetting framework; Corridors uses a network diagram and route-specific sections; Fleet uses an operational control register, illustrative table and workshop story; Safety uses numbered controls, driver care and jurisdictional compliance.

### Responsive and accessibility handling

Shared hero and split sections stack below 900px. Services retain a narrow index column on tablet before stacking on mobile. Editorial rows keep their headings and descriptions aligned, then stack descriptions beneath headings on narrow screens. The monitoring table becomes labeled stacked rows below 600px while retaining explicit table roles and hidden column headers. Mobile visual labels are hidden from assistive technology to avoid duplicate announcements. Route labels scale with the diagram and have larger type on small screens. All layout columns use `minmax(0, 1fr)` where appropriate to avoid intrinsic overflow.

Each page has one H1, named semantic sections, H2 section headings and H3 subsection headings. Breadcrumbs use a labeled navigation landmark, Home router link and current-page text. Photos use descriptive alt text and intrinsic dimensions; below-fold photography is lazy-loaded. Decorative route graphics and numbering are hidden from assistive technology. Existing visible focus and reduced-motion styles are preserved; no new animation was introduced.

### Assets still needed

The five pages reuse the established generated freight, operations-yard and dispatch placeholders. They do not show verified Onboard assets or facilities. Approved fleet, dispatch, workshop and driver-care photography is needed before launch; the workshop section's current image does not depict the actual Kasangati workshop. Replacement image references and alt text are centralized in `data/pageImages.ts`. Keep replacements local and update intrinsic dimensions as needed.

## Client Verification Required

Do not publish these as verified facts without client approval:

- Exact annual kilometers: confirm the existing homepage `1,200,000+` figure before launch.
- 0% loss/demurrage claims: not published on the new pages.
- Direct API customs integrations: not published.
- Exact maintenance intervals: not published.
- Remote immobilization: not published.
- Exact curfew policy: not published.
- Exact workshop equipment: confirm inventory, ECU diagnostic capability, wheel alignment, lifting bays and OEM parts policy before presenting precise equipment details. New copy avoids an equipment inventory or exact specifications.
- Exact fleet size: not published.
- Exact route security procedures: not published; no security or clearance guarantees are asserted.
- Exact physical address: only the city-level “Kampala, Uganda” is published; confirm the plot/address.
- Official phone numbers/emails: not published; visitors use the contact route.
- Careers submission destination: the interest link currently opens the locally prepared contact form with Careers selected; confirm the authorized careers inbox or workflow before enabling transmission.
- Sustainability claims/programs: no targets, certifications or measurable outcomes are asserted; verify any future programs and claims before adding them.
- Quote submission recipient: no quote request is sent; confirm the authorized recipient before enabling delivery.
- Privacy handling requirements: define notice, purpose, retention, access and consent before accepting or retaining submissions.

Also confirm the existing 100% fleet coverage and 24/7 monitoring claims, tracking/axle-load coverage, third-party integration, five-stage subcontractor framework, driver welfare procedures, incentive policy, workshop arrangements and route coverage. Source-supported themes are centralized in the corporate data files; verification comments mark fleet/service/safety details requiring final sign-off. Mission and vision are presented as intended direction, not guaranteed outcomes. No official endorsement from customs or regulatory bodies is claimed.

### Phase 2A validation

- `npm run build`: passed, including strict TypeScript.
- `npm run lint`: passed with no warnings.
- React render checks: passed for five completed pages, accessible breadcrumbs, a single H1, unique IDs and section-label references, descriptive images, shared CTA destinations, five-stage vetting content, four independent route origins and nine illustrative fleet cells.
- Regression render checks: homepage sections, remaining six secondary/legal shells and wildcard 404 passed.
- No existing test suite or test script was found.
- Browser viewport verification at 375, 430, 768, 1024, 1280, 1440 and 1920px remains pending because preview-server binding and browser sockets are restricted in this sandbox. Render checks do not verify visual layout, keyboard interaction or horizontal overflow in a browser.


## Phase 2B — Sustainability, careers and enquiries

Implemented `/sustainability`, `/careers`, `/contact` and `/request-quote` using the established internal hero and design tokens. Sustainability uses directional operational copy and an editorial responsibility register. Careers lists functional teams without implying vacancies and offers the requested career enquiry path. Contact displays the approved city-level label “Kampala, Uganda” and a locally validated enquiry form. The quote page contains a four-step in-memory form with review before preparation.

New typed data: `src/data/sustainability.ts`, `careers.ts`, `contact.ts`, and `quote.ts`; new form models live in `src/types/forms.ts`. Shared controls in `src/components/forms/` provide labeled inputs, select, text area, inline errors, yes/no choices, quote progress, contact validation and the quote step flow. Validation helpers in `src/lib/formValidation.ts` validate each quote step before advancing. Route and destination fields allow free text with suggestions. Back navigation preserves entered values. No API, browser storage, third-party service or submission recipient has been configured.

The contact success state says the enquiry has been prepared and online submission awaits a connected service. The quote completion state says the same for quote requests. No message is represented as delivered. Careers, contact and quote pages require no new image assets; sustainability uses the existing local illustrative freight image.

### Responsive and accessible handling

Contact stacks its context and form below the desktop split breakpoint. Form grids, radio groups, review summaries and navigation controls collapse to one column on narrow screens. The four-step indicator shows the current label and all step numbers on phones, with remaining labels available to assistive technology. Destination is free-text with optional suggestions. Fields use explicit labels, linked error descriptions, custom validation, `aria-invalid`, required indicators and first-error focus. Contact and quote status messages use a polite live region. Radio choices use fieldsets and legends. Inputs use appropriate email/tel autocomplete, mobile-friendly input modes and keyboard focus styles.

### Client Verification Required

- Confirm the exact physical office address before adding it; only “Kampala, Uganda” is displayed.
- Confirm official phone numbers and email addresses before publishing them; none are currently shown.
- Confirm the authorized careers interest recipient or workflow; the career link opens a preselected enquiry form, which currently only prepares an enquiry locally.
- Confirm sustainability programs and environmental statements before publishing specific initiatives, measured claims, certifications or targets. The current page makes no quantified environmental claims.
- Confirm the authorized quote submission recipient before enabling delivery. Quote requests are not transmitted.
- Confirm privacy notice, purpose, retention, security and consent handling for contact and quote information before accepting or retaining live submissions. Neither form currently persists information.

The exact annual kilometers, 0% loss/demurrage, direct customs APIs, exact maintenance intervals, remote immobilization, exact curfew, workshop equipment, exact fleet size and route security items listed earlier in this README also remain unverified and are not presented as confirmed new page claims.

### Phase 2B verification

- `npm run build`: passed with strict TypeScript and Vite production bundling.
- `npm run lint`: passed with no warnings.
- No tests or test infrastructure exist in the repository; no testing dependency or test suite was added.
- Interactive browser testing at 375, 430, 768, 1024, 1280, 1440 and 1920px could not run in this environment because server and browser socket access are restricted. Build and lint do not establish form interaction or viewport rendering behavior.

## Phase 3 — Production readiness

### SEO, static output and domain configuration

`src/config/site.ts` is the single public-origin source. Set `VITE_SITE_URL` to the approved production origin in the deployment environment; the reserved `https://example.com` fallback exists only so local builds can run and is a launch blocker. Do not include a trailing path or route in this value. `.env.example` documents the public site URL, future form endpoint variables and analytics ID; it contains no secret values.

`src/data/siteMetadata.ts` owns titles, descriptions, indexability and breadcrumb labels for every route. The reusable SEO component updates canonical, robots, Open Graph, Twitter and breadcrumb metadata when client navigation occurs. `scripts/prerender.mjs` produces route-specific HTML for all declared routes and a `dist/404.html`, using React server rendering and the Vite manifest to point local images at built assets. This keeps the current SPA architecture while giving crawlers route content and metadata before JavaScript runs. Configure the host to serve `/about/` from `dist/about/index.html` (and likewise for other routes), and return `dist/404.html` with HTTP status 404 for unknown routes.

The generated sitemap lists the ten indexable routes. Privacy and Terms are intentionally `noindex` and excluded until counsel approves their content; they currently remain visible as placeholder shells. The 404 page is `noindex` and has no canonical. Do not launch the legal shells as final policies.

The current social preview is `public/og/onboard-logistics-og-placeholder.jpg`, a local illustrative placeholder. Replace it with approved brand photography/artwork at **1200 × 630 px**, keep it in `public/og/`, then update the centralized social image path in `src/components/ui/SEO.tsx` and `scripts/prerender.mjs`. The site favicon currently uses the supplied logo artwork; confirm the final icon treatment with the client. The actual logo is copied unchanged to `public/brand/onboard-logistics-logo.png` for structured data.

The homepage hero and below-fold content use local WebP images with intrinsic dimensions. The hero is eager and prioritized; below-fold imagery is lazy-loaded. Replace illustrative placeholders with approved photographs before launch. For future source photos, keep responsive dimensions appropriate to their layout and convert to WebP or AVIF with a JPEG fallback only when the hosting/image pipeline supports it. Do not overwrite the logo with lossy conversion.

### Forms, analytics and deployment headers

`src/services/enquiries.ts` defines typed contact and freight quote integration boundaries that fail explicitly as “not configured”; the pages do not call them and no form submission is represented as delivered. Connect approved endpoints through these functions after recipient, validation, spam controls, privacy wording and error handling are agreed. `VITE_CONTACT_ENDPOINT` and `VITE_QUOTE_ENDPOINT` are reserved configuration entries, currently blank. Do not store submissions in browser storage.

`src/lib/analytics.ts` is a disabled placeholder and makes no network calls. Analytics requires client approval and privacy review before enabling. Keep `VITE_ANALYTICS_ID` blank until that approval and cookie/consent decision are documented.

The deployment target is not selected, so no host-specific header file has been added. Configure the hosting/CDN response headers after reviewing the actual deployment and any connected services: `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, a restrictive `Permissions-Policy` (for example camera, microphone and geolocation disabled), and `Strict-Transport-Security` only after HTTPS is enforced. Build a CSP from the deployed asset and form origins; do not copy a permissive policy or add `unsafe-eval` without a demonstrated need. Add HSTS `includeSubDomains` only if every subdomain is HTTPS-ready.

### Production Launch Checklist

**Client content**

- [ ] Verify official phone and email details before publishing.
- [ ] Approve the exact office address; the site currently shows only “Kampala, Uganda”.
- [ ] Replace illustrative freight, operations and dispatch photography with approved images.
- [ ] Approve social profile links before adding any `sameAs` schema values.
- [ ] Verify all operational claims, including figures and monitoring/fleet scope, before launch.

**Legal**

- [ ] Obtain approved Privacy Policy and Terms; remove `noindex` only after publication review.
- [ ] Decide cookie and analytics requirements with the client and privacy reviewer.

**Forms**

- [ ] Configure the approved contact enquiry recipient/service.
- [ ] Configure the approved quote request recipient/service.
- [ ] Decide spam protection and server-side validation.
- [ ] Approve privacy notice and consent wording, data purpose, access and retention.
- [ ] Confirm the careers enquiry destination.

**SEO**

- [ ] Set `VITE_SITE_URL` to the final canonical domain and choose the `www` or apex host.
- [ ] Verify all canonical tags and social previews on the deployed host.
- [ ] Verify the generated sitemap and submit it to Search Console.
- [ ] Replace and approve the 1200 × 630 OG image.

**Deployment**

- [ ] Enforce HTTPS and set the approved site URL environment variable.
- [ ] Configure reviewed security headers at the host/CDN.
- [ ] Redirect the alternate `www`/non-`www` host to the canonical host.
- [ ] Verify direct route loads and HTTP 404 behavior for unknown paths.
- [ ] Confirm public environment variables; keep all secrets out of `VITE_*` variables.

**Monitoring**

- [ ] Configure uptime monitoring and error reporting with client approval.
- [ ] Enable analytics only after client approval and privacy review.

### Phase 3 validation

- `npm run build`: TypeScript, Vite production build and route prerendering.
- `npm run lint`: Oxlint.
- No existing automated test suite is configured. Browser and deployed-header checks remain deployment-stage tasks.
# onboard-logistics
