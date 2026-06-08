## What I'm building

A single-page marketing site for **Scraps** with the tagline _"Turn what you have into what you'll love."_ — designed to make visitors immediately understand the app and feel compelled to join the waitlist.

Visual direction: **Warm culinary editorial** (the one you picked).
- Cream background `#FDF8F1`, coral accent `#E8714C`, soft coral `#FF9B7A`, peach `#FFD9A8`
- Fraunces serif for headlines, Inter for body
- Editorial whitespace, phone mockup hero, one dark "method" section for rhythm

## Page structure (one route, `/`)

1. **Nav** — small Scraps wordmark left, light links (How it works · Mission · Sustainability) center, "Get early access" pill right.
2. **Hero** — Two-column: oversized serif tagline + waitlist email form on the left, an iPhone mockup on the right rendering the actual Scan screen from your app (warm orange→green gradient, ingredient cards, bottom nav). A floating "2 ingredients identified" card peeks out beside the phone.
3. **The Scraps Cycle** — Dark cream-on-espresso section, 5 numbered beats matching the app flow: **Scan → Talk → Generate → Cook → Save**. Each gets a short, human one-liner.
4. **Feature showcase** — Warm editorial split: real food photography (generated overhead shot of zucchini, lemon, basil, tomatoes on linen) paired with two micro-features: _Smart voice input_ and _Infinite variations_. Headline: "Stop the waste, keep the taste."
5. **Waitlist CTA** — Big coral block, serif headline "Ready to cook smarter?", inline email form, "2,400+ already on the list" social proof line.
6. **Footer** — Wordmark, copyright, Privacy / Terms / Contact.

## Functionality

- **Waitlist form** works end-to-end on submit: validates email, shows a sonner toast confirmation, clears the field. Stored in local React state for now (no backend yet — see "Next step" below).
- Smooth scroll from nav + hero CTA down to the `#waitlist` section.
- Subtle scroll-in fade for the cycle steps and feature section (CSS only, no heavy lib).
- Fully responsive — phone mockup stacks below copy on mobile, cycle becomes a vertical list.

## Files to change

- `src/styles.css` — add `--color-cream`, `--color-brand`, `--color-brand-light`, `--color-peach`, `--color-ink`, `--font-serif`, `--font-sans` tokens in `@theme`.
- `src/routes/__root.tsx` — set real `<title>` + meta + OG tags ("Scraps — Turn what you have into what you'll love"), preconnect and load Fraunces + Inter from Google Fonts.
- `src/routes/index.tsx` — replace placeholder with the full landing page above.
- `src/components/landing/` — small section components: `Nav.tsx`, `Hero.tsx`, `PhoneMockup.tsx`, `Cycle.tsx`, `FeatureShowcase.tsx`, `WaitlistCTA.tsx`, `Footer.tsx`, `WaitlistForm.tsx` (shared).
- `src/assets/hero-ingredients.jpg` — already generated (warm overhead vegetables shot used in the feature section).

## Next step (after you see the page)

The waitlist form currently just confirms with a toast. When you want real email capture, I'll enable **Lovable Cloud** in one step and persist signups to a `waitlist_signups` table with RLS so only you can read them. Let me know and I'll wire it up.
