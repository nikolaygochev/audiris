# Solution Architecture
**Role:** Software Architect
**Project:** Audiris — Corporate Website
**Version:** 1.0
**Date:** 2026-03-30

---

## 1. Architecture Overview

Audiris is a **statically generated, serverless web application** deployed on Vercel. It follows a Jamstack pattern: all pages are pre-rendered at build time (SSG), with a single serverless API route handling contact form submissions. There is no persistent backend server or database.

---

## 2. System Context Diagram (C1)

```
┌─────────────────────────────────────────────────────────────────────┐
│                         EXTERNAL ACTORS                             │
│                                                                     │
│   ┌──────────────┐    ┌──────────────┐    ┌──────────────────────┐ │
│   │   Visitor /  │    │   Search     │    │  Audiris Sales /     │ │
│   │   Prospect   │    │   Engine     │    │  Business Team       │ │
│   └──────┬───────┘    └──────┬───────┘    └──────────┬───────────┘ │
│          │ HTTPS             │ crawl                  │ email       │
└──────────┼───────────────────┼────────────────────────┼────────────┘
           │                   │                        │
           ▼                   ▼                        ▼
┌──────────────────────────────────────────────────────────────────────┐
│                    AUDIRIS CORPORATE WEBSITE                         │
│                     (audiris.com on Vercel)                          │
│                                                                      │
│   Static Pages + Serverless API + CDN Edge Network                   │
└──────────────────────────────────────────────────────────────────────┘
           │                                            │
           ▼                                            ▼
┌──────────────────┐                        ┌───────────────────────┐
│  External        │                        │  External             │
│  Services        │                        │  Analytics            │
│  - Resend API    │                        │  - Plausible / GA4    │
│  - Calendly      │                        │                       │
└──────────────────┘                        └───────────────────────┘
```

---

## 3. Container Diagram (C2)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         VERCEL PLATFORM                                     │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                      NEXT.JS APPLICATION                             │  │
│  │                                                                      │  │
│  │  ┌─────────────────────────────────────────────────────────────┐    │  │
│  │  │                  STATIC SITE (SSG)                          │    │  │
│  │  │                                                             │    │  │
│  │  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │    │  │
│  │  │  │   Home   │  │ Services │  │  About   │  │ Contact  │   │    │  │
│  │  │  │ page.tsx │  │  pages   │  │ page.tsx │  │ page.tsx │   │    │  │
│  │  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │    │  │
│  │  │                                                             │    │  │
│  │  │  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐  │    │  │
│  │  │  │ Case Studies │  │Privacy Policy│  │  sitemap.ts /   │  │    │  │
│  │  │  │  (placeholder│  │  page.tsx    │  │  robots.ts      │  │    │  │
│  │  │  └──────────────┘  └──────────────┘  └─────────────────┘  │    │  │
│  │  └─────────────────────────────────────────────────────────────┘    │  │
│  │                                                                      │  │
│  │  ┌─────────────────────────────────────────────────────────────┐    │  │
│  │  │              SERVERLESS API ROUTES                          │    │  │
│  │  │                                                             │    │  │
│  │  │  ┌──────────────────────────────────────────────────────┐  │    │  │
│  │  │  │  POST /api/contact  (route.ts)                       │  │    │  │
│  │  │  │  1. Parse JSON body                                  │  │    │  │
│  │  │  │  2. Check honeypot (bot detection)                   │  │    │  │
│  │  │  │  3. Validate fields (name, company, email, service)  │  │    │  │
│  │  │  │  4. Send via Resend SDK                              │  │    │  │
│  │  │  │  5. Return 200 / 400 / 500                           │  │    │  │
│  │  │  └──────────────────────────────────────────────────────┘  │    │  │
│  │  └─────────────────────────────────────────────────────────────┘    │  │
│  │                                                                      │  │
│  │  ┌─────────────────────────────────────────────────────────────┐    │  │
│  │  │                  SHARED LAYER                               │    │  │
│  │  │  ┌────────────┐  ┌─────────────┐  ┌──────────────────────┐ │    │  │
│  │  │  │ lib/       │  │ components/ │  │ public/              │ │    │  │
│  │  │  │ content.ts │  │ ui/ layout/ │  │ logo.svg og-image.png│ │    │  │
│  │  │  │ services.ts│  │ home/ etc.  │  │                      │ │    │  │
│  │  │  │ metadata.ts│  │             │  │                      │ │    │  │
│  │  │  └────────────┘  └─────────────┘  └──────────────────────┘ │    │  │
│  │  └─────────────────────────────────────────────────────────────┘    │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌──────────────────────────┐    ┌─────────────────────────────────────┐   │
│  │   VERCEL CDN / EDGE      │    │  VERCEL BUILD PIPELINE              │   │
│  │   - Global PoPs          │    │  - next build (SSG)                 │   │
│  │   - HTTPS enforced       │    │  - Atomic deployments               │   │
│  │   - Security headers     │    │  - Preview deployments per PR       │   │
│  │   - Asset caching        │    │  - Zero downtime deploys            │   │
│  └──────────────────────────┘    └─────────────────────────────────────┘   │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │  ENVIRONMENT VARIABLES (encrypted at rest)                           │  │
│  │  RESEND_API_KEY · CONTACT_EMAIL · NEXT_PUBLIC_CALENDLY_URL           │  │
│  │  NEXT_PUBLIC_PLAUSIBLE_DOMAIN                                        │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
              │                           │
              ▼                           ▼
┌─────────────────────┐       ┌──────────────────────────┐
│   RESEND API        │       │  PLAUSIBLE / GA4          │
│   (email delivery)  │       │  (privacy-first analytics)│
│   Free tier: 3k/mo  │       │  Fires after consent only │
└─────────────────────┘       └──────────────────────────┘
```

---

## 4. Component Diagram (C3) — Next.js Internals

```
app/
│
├── layout.tsx ─────────────────────────────────────────────────────────┐
│   Root Shell                                                           │
│   ├── <Navbar />         sticky, mobile-responsive, dropdown          │
│   ├── <CookieBanner />   localStorage consent, GDPR                   │
│   ├── <Analytics />      fires only after consent                     │
│   └── <Footer />         4-col desktop / stacked mobile               │
│                                                                        │
├── page.tsx (Home /)                                                    │
│   ├── <Hero />            headline, 2 CTAs, geometric BG              │
│   ├── <SocialProof />     stats or logo strip                         │
│   ├── <ServicesOverview id="services" /> 2×2 grid → service pages     │
│   ├── <WhyAudiris />      dark Slate-900, 4 differentiators           │
│   ├── <OriginStory />     2-col, teaser → /about                      │
│   └── <HomeCTA />         full-width Emerald CTA                      │
│                                                                        │
├── services/                                                            │
│   ├── qa-testing/page.tsx ──────────────────────────────────────┐     │
│   ├── automation-testing/page.tsx                               │     │
│   ├── software-development/page.tsx   ← shared layout, ──────── ┤     │
│   └── outsourcing/page.tsx              content from lib/       │     │
│                                          services.ts            │     │
│   Shared service page sections:                                 │     │
│   ├── <ServiceHero />      breadcrumb, title, CTA               │     │
│   ├── <ProblemStatement /> Emerald left border                  │     │
│   ├── <ProcessSteps />     3–5 numbered timeline steps          │     │
│   ├── <ToolsGrid />        4-col / 2-col responsive             │     │
│   ├── <RelatedServices />  2 complementary service cards        │     │
│   ├── <ServiceCTA />       Slate-900 bg, "Talk to expert"       │     │
│   └── <MobileStickyBar />  appears at 50% scroll, mobile only   │     │
│                                                                  │     │
├── about/page.tsx                                                        │
│   ├── <CompanyStory />    2-col, pull quote                            │
│   ├── <Values />          3–5 values grid                             │
│   └── <Team />            placeholder cards → real bios post-launch   │
│                                                                        │
├── contact/page.tsx                                                     │
│   ├── <ContactForm />     RHF validation, honeypot, success/error     │
│   ├── <BookingSection />  Calendly widget or fallback email           │
│   └── <ContactInfo />     mailto, LinkedIn, response SLA              │
│                                                                        │
├── case-studies/page.tsx   Placeholder                                  │
├── privacy-policy/page.tsx Static content                              │
│                                                                        │
├── api/contact/route.ts    POST handler (see §3)                       │
├── sitemap.ts              Auto-generated XML sitemap                  │
└── robots.ts               Allow all, ref sitemap                      │
│
└──────────────────────────────────────────────────────────────────────┘

Shared UI atoms (components/ui/):
  Button · Card · Badge · SectionHeading · AnimatedSection · ToolChip

Content layer (lib/):
  content.ts   ← all copy strings (no hardcoded JSX strings)
  services.ts  ← service-page data (steps, tools, descriptions)
  metadata.ts  ← SEO metadata helpers per page
```

---

## 5. Data Flow Diagram — Contact Form Submission

```
Browser (User)                 Vercel Edge / Serverless          Resend API        Audiris Inbox
      │                                │                              │                   │
      │  1. Fill form                  │                              │                   │
      │─────────────────────────────── ▶                              │                   │
      │                                │                              │                   │
      │  2. POST /api/contact          │                              │                   │
      │  { name, company, email,       │                              │                   │
      │    service, message,           │                              │                   │
      │    honeypot }                  │                              │                   │
      │─────────────────────────────── ▶                              │                   │
      │                                │                              │                   │
      │                                │  3. Validate honeypot        │                   │
      │                                │     (if filled → 200 silent) │                   │
      │                                │                              │                   │
      │                                │  4. Validate required fields │                   │
      │                                │     + email format           │                   │
      │                                │     (fail → 400 + errors)    │                   │
      │  ◀── 400 Bad Request ──────────│                              │                   │
      │                                │                              │                   │
      │                                │  5. resend.emails.send()     │                   │
      │                                │─────────────────────────────▶│                   │
      │                                │                              │  6. SMTP delivery │
      │                                │                              │──────────────────▶│
      │                                │  7. 200 OK (email queued)    │                   │
      │                                │◀─────────────────────────────│                   │
      │  ◀── 200 OK ───────────────────│                              │                   │
      │                                │                              │                   │
      │  8. Show success message        │                              │                   │
      │  "Thank you! We'll be in       │                              │                   │
      │   touch within 1 business day" │                              │                   │
```

---

## 6. Deployment Architecture

```
                         ┌─────────────┐
                         │   GitHub    │
                         │  Repository │
                         └──────┬──────┘
                                │ git push / PR merge
                                ▼
                    ┌───────────────────────┐
                    │   VERCEL CI/CD        │
                    │   - next build (SSG)  │
                    │   - Type check        │
                    │   - Preview deploys   │
                    └──────────┬────────────┘
                               │ atomic deploy
                               ▼
              ┌────────────────────────────────┐
              │       VERCEL EDGE NETWORK       │
              │                                 │
              │  ┌──────┐  ┌──────┐  ┌──────┐  │
              │  │ PoP  │  │ PoP  │  │ PoP  │  │
              │  │  EU  │  │ US   │  │ APAC │  │
              │  └──────┘  └──────┘  └──────┘  │
              │                                 │
              │  Static assets cached at edge   │
              │  Serverless fns: eu-west-1      │
              └──────────────┬─────────────────-┘
                             │
                             ▼
              ┌──────────────────────────────────┐
              │       DNS / Domain               │
              │   audiris.com → Vercel           │
              │   HTTPS via Let's Encrypt        │
              │   HTTP → HTTPS redirect          │
              └──────────────────────────────────┘
```

---

## 7. Security Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│  LAYER 1 — Transport                                             │
│  HTTPS enforced everywhere (Vercel default)                      │
│  HTTP → HTTPS redirect                                           │
└──────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────┐
│  LAYER 2 — HTTP Security Headers (next.config.js)               │
│  X-Content-Type-Options: nosniff                                 │
│  X-Frame-Options: SAMEORIGIN                                     │
│  X-XSS-Protection: 1; mode=block                                 │
│  Referrer-Policy: strict-origin-when-cross-origin                │
│  Permissions-Policy: camera=(), microphone=(), geolocation=()    │
│  Content-Security-Policy: restrictive; no inline scripts         │
└──────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────┐
│  LAYER 3 — API Route Protection (/api/contact)                   │
│  • Input validation (all fields, email format)                   │
│  • Honeypot bot detection (silent 200 discard)                   │
│  • RESEND_API_KEY server-only (never in client bundle)           │
│  • No sensitive data logged                                      │
└──────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────┐
│  LAYER 4 — Privacy / Compliance                                  │
│  • Cookie consent (localStorage) before analytics fires          │
│  • No PII in analytics events                                    │
│  • GDPR-compliant analytics (Plausible preferred)                │
│  • Privacy Policy page linked from banner                        │
└──────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────┐
│  LAYER 5 — Supply Chain                                          │
│  • npm audit pre-launch (no high/critical vulns)                 │
│  • Minimal dependency surface                                    │
│  • Tree-shaken bundle (no unused deps shipped)                   │
└──────────────────────────────────────────────────────────────────┘
```

---

## 8. Integration Map

```
         ┌──────────────────────────────────────────────────────┐
         │               AUDIRIS WEBSITE                        │
         │                                                      │
         │  ┌──────────────┐        ┌───────────────────────┐  │
         │  │ Contact Form │───────▶│  POST /api/contact    │  │
         │  └──────────────┘        └──────────┬────────────┘  │
         │                                     │               │
         │  ┌──────────────┐                   │ Resend SDK    │
         │  │ Cookie       │                   ▼               │
         │  │ Consent      │──┐     ┌──────────────────────┐  │
         │  │ Banner       │  │     │   RESEND API         │  │
         │  └──────────────┘  │     │   re_xxxxxxxxxxxx    │  │
         │                    │     └──────────────────────┘  │
         │  ┌──────────────┐  │                               │
         │  │ Analytics    │◀─┘ fires                         │
         │  │ Script       │    only after                     │
         │  │ (lazy load)  │    accept                        │
         │  └──────┬───────┘                                   │
         │         │                                           │
         │  ┌──────────────┐        ┌───────────────────────┐  │
         │  │ Booking      │───────▶│   CALENDLY WIDGET     │  │
         │  │ Section      │ embed  │   (or fallback email) │  │
         │  └──────────────┘        └───────────────────────┘  │
         └──────────────────────────────────────────────────────┘
                   │
                   ▼
         ┌──────────────────────┐
         │  PLAUSIBLE / GA4     │
         │  NEXT_PUBLIC_        │
         │  PLAUSIBLE_DOMAIN    │
         └──────────────────────┘
```

---

## 9. Architecture Decision Records (ADR)

| # | Decision | Rationale |
|---|----------|-----------|
| ADR-01 | **Next.js 14 App Router + SSG** | SEO-critical site; all pages pre-rendered at build time → no server at runtime → 99.9% uptime guaranteed by CDN |
| ADR-02 | **Vercel deployment** | Zero-config for Next.js; atomic deploys; global edge CDN; free tier sufficient for v1 |
| ADR-03 | **No CMS at launch** | Reduces complexity and cost; content in `lib/content.ts`; CMS added in v2.0 when content velocity demands it |
| ADR-04 | **Resend for email** | Simple SDK; free tier (3k emails/month) exceeds needs; reliable deliverability with SPF/DKIM |
| ADR-05 | **Tailwind CSS** | Utility-first enables rapid iteration; design tokens enforce brand consistency; no CSS bundle bloat |
| ADR-06 | **Framer Motion** | Declarative scroll reveals with `whileInView`; built-in `prefers-reduced-motion` support |
| ADR-07 | **React Hook Form** | Lightweight (no schema library dependency); native HTML5 validation integration; uncontrolled inputs = better perf |
| ADR-08 | **Plausible (preferred) over GA4** | Privacy-first; GDPR-compliant without complex consent setup; no cookie for basic analytics |
| ADR-09 | **Honeypot over CAPTCHA** | Zero user friction; invisible to legitimate users; sufficient for low-volume contact form |
| ADR-10 | **Single serverless function** | Only stateful operation is contact form; everything else is static → simplest possible backend surface |

---

## 10. Constraints & Trade-offs

| Constraint | Impact | Mitigation |
|-----------|--------|-----------|
| No CMS at launch (C-02) | Content updates require code deploy | Content isolated in `lib/content.ts`; non-developers can submit PRs; CMS planned for v2.0 |
| No real client logos/testimonials at launch (C-03) | Weaker social proof | Stat cards as placeholders; architected for easy swap post-launch |
| Serverless only — no persistent DB (C-01) | Can't track submissions server-side | Resend delivers directly to inbox; Plausible tracks conversions anonymously |
| Single developer (C-04) | Limited parallel workstreams | Strict content/code separation; shared component library minimises duplication |
| Domain registration status unknown (C-06) | Launch dependency | Vercel subdomain as fallback; OG metadata uses relative paths |
