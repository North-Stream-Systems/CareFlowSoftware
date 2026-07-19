# CareFlow marketing site

Public marketing site for CareFlow (by North Stream Systems) — a UK SaaS platform for
domiciliary and residential care providers. Built with Next.js 14 (App Router),
TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/` — routes: homepage, `/pricing`, `/about`, `/book-demo`, and the
  `/api/demo-request` placeholder endpoint.
- `components/layout` — header, footer, mobile nav.
- `components/sections` — homepage sections (hero, story, product, pricing, etc).
- `components/pricing`, `components/product`, `components/forms`, `components/ui` —
  shared building blocks.
- `lib/content` — hardcoded copy/config (founders, pricing, product modules, FAQs).
- `lib/fonts.ts`, `lib/site.ts` — font loading and site-wide config.

## Assets to swap in

- `public/logo.svg` — placeholder mark; replace with the real CareFlow logo.
- Founder avatars in `components/ui/Avatar.tsx` are initials placeholders; swap in
  real headshots.
- The pilot testimonial in `components/sections/SocialProof.tsx` is a labelled
  placeholder — replace once sign-off is confirmed.
- `/api/demo-request` currently logs submissions to the server console — wire it up
  to email/CRM before launch.

## Deploying

Deploy-ready for Vercel as-is (`vercel deploy` or via the Vercel dashboard).
