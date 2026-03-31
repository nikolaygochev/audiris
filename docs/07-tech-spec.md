# Technical Specification
**Role:** Business Analyst / Technical Lead
**Project:** Audiris — Corporate Website
**Version:** 1.0
**Date:** 2026-03-30

---

## 1. Technology Stack

| Layer | Technology | Version | Justification |
|-------|-----------|---------|---------------|
| Framework | Next.js | 14.x (App Router) | SSG for SEO; React ecosystem; Vercel-native |
| Language | TypeScript | 5.x | Type safety; better DX with Claude Code |
| Styling | Tailwind CSS | 3.x | Utility-first; design tokens; fast iteration |
| Animation | Framer Motion | 11.x | Scroll reveals; smooth transitions |
| Icons | Lucide React | latest | Consistent, tree-shakeable SVG icons |
| Forms | React Hook Form | 7.x | Lightweight; built-in validation |
| Email | Resend | latest | Simple API; reliable delivery; free tier |
| Font | next/font (DM Sans) | — | Zero layout shift; self-hosted |
| Analytics | Plausible (or GA4) | — | Privacy-first; GDPR-compliant |
| Deployment | Vercel | — | Zero-config Next.js; free tier |

---

## 2. Project Structure

```
audiris/
├── app/
│   ├── layout.tsx                    # Root layout (Navbar, Footer, Analytics, Cookie banner)
│   ├── page.tsx                      # Home page
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx                  # Services index (redirects to home#services)
│   │   ├── qa-testing/page.tsx
│   │   ├── automation-testing/page.tsx
│   │   ├── software-development/page.tsx
│   │   └── outsourcing/page.tsx
│   ├── case-studies/
│   │   └── page.tsx                  # Placeholder
│   ├── contact/
│   │   └── page.tsx
│   ├── privacy-policy/
│   │   └── page.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts              # Form submission handler (Resend)
│   ├── sitemap.ts                    # Auto-generated sitemap
│   └── robots.ts                     # robots.txt
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── CookieBanner.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── SocialProof.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── WhyAudiris.tsx
│   │   ├── OriginStory.tsx
│   │   └── HomeCTA.tsx
│   ├── services/
│   │   ├── ServiceHero.tsx
│   │   ├── ProblemStatement.tsx
│   │   ├── ProcessSteps.tsx
│   │   ├── ToolsGrid.tsx
│   │   ├── RelatedServices.tsx
│   │   ├── ServiceCTA.tsx
│   │   └── MobileStickyBar.tsx
│   ├── about/
│   │   ├── CompanyStory.tsx
│   │   ├── Values.tsx
│   │   └── Team.tsx
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   ├── BookingSection.tsx
│   │   └── ContactInfo.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── SectionHeading.tsx
│       ├── AnimatedSection.tsx       # Framer Motion scroll reveal wrapper
│       └── ToolChip.tsx
│
├── lib/
│   ├── content.ts                    # All page copy (strings, arrays)
│   ├── services.ts                   # Service page data (process steps, tools, etc.)
│   └── metadata.ts                   # SEO metadata helpers
│
├── public/
│   ├── logo.svg
│   ├── logo-dark.svg
│   ├── logo-mark.svg
│   └── og-image.png                  # Open Graph image (1200×630)
│
├── .env.local                        # Secrets (gitignored)
├── .env.example                      # Template (committed)
├── next.config.js                    # Security headers, image domains
├── tailwind.config.ts                # Brand design tokens
├── tsconfig.json                     # TypeScript config (strict mode)
└── README.md
```

---

## 3. Design Tokens (Tailwind)

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          500: '#059669',   // primary emerald
          600: '#047857',   // hover state
          700: '#065f46',
          900: '#064e3b',
        },
        accent: {
          400: '#fbbf24',
          500: '#f59e0b',   // amber CTAs
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
}

export default config
```

---

## 4. Environment Variables

```bash
# .env.example

# Resend API — contact form email delivery
# Get from: https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Email address to receive contact form submissions
CONTACT_EMAIL=hello@audiris.com

# Plausible analytics domain (optional)
# Get from: https://plausible.io
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=audiris.com

# Calendly booking URL (optional — shows fallback if not set)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/audiris/discovery
```

---

## 5. Security Headers (`next.config.js`)

```js
const securityHeaders = [
  { key: 'X-Content-Type-Options',  value: 'nosniff' },
  { key: 'X-Frame-Options',         value: 'SAMEORIGIN' },
  { key: 'X-XSS-Protection',        value: '1; mode=block' },
  { key: 'Referrer-Policy',         value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy',      value: 'camera=(), microphone=(), geolocation=()' },
]

module.exports = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
}
```

---

## 6. Contact Form API Route

```ts
// app/api/contact/route.ts — logic outline
// POST /api/contact
// 1. Parse JSON body
// 2. Check honeypot — if filled, return 200 (silent discard)
// 3. Validate required fields (name, company, email, service)
// 4. Validate email format
// 5. Send email via Resend SDK
// 6. Return 200 on success, 400 on validation failure, 500 on Resend error
```

---

## 7. SEO Metadata Pattern

```ts
// app/services/qa-testing/page.tsx
export const metadata = {
  title: 'QA & Testing Services | Audiris',
  description: 'Expert QA and software testing services from Audiris — ...',
  openGraph: {
    title: 'QA & Testing Services | Audiris',
    description: '...',
    url: 'https://audiris.com/services/qa-testing',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}
```

---

## 8. Deployment Checklist (Pre-launch)

### Domain & DNS
- [ ] Domain registered (audiris.com or chosen domain)
- [ ] DNS pointed to Vercel
- [ ] HTTPS certificate active

### Environment
- [ ] `RESEND_API_KEY` set in Vercel environment variables
- [ ] `CONTACT_EMAIL` set in Vercel environment variables
- [ ] `NEXT_PUBLIC_CALENDLY_URL` set (or intentionally left blank)
- [ ] `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` set

### Content
- [ ] All page copy reviewed and approved
- [ ] All 4 service pages complete
- [ ] About page copy approved
- [ ] Privacy policy reviewed
- [ ] Contact email address confirmed

### Quality
- [ ] Lighthouse ≥ 90 on all main pages (mobile and desktop)
- [ ] All forms tested end-to-end (submission received in inbox)
- [ ] All internal links verified (no 404s)
- [ ] Mobile tested on iOS Safari and Android Chrome
- [ ] Cookie consent tested (accept and decline flows)
- [ ] `npm audit` — no high/critical vulnerabilities

### SEO
- [ ] sitemap.xml accessible and valid
- [ ] robots.txt accessible
- [ ] Google Search Console property created and sitemap submitted
- [ ] OG image present and correct dimensions (1200×630)

---

## 9. Post-launch Roadmap

| Phase | Feature | Priority |
|-------|---------|---------|
| v1.1 | Real team bios and photos | High |
| v1.1 | 1–2 testimonials or client quotes | High |
| v1.2 | First case study page | High |
| v1.3 | Blog / resources section | Medium |
| v2.0 | CMS integration (Sanity or Contentful) | Medium |
| v2.0 | Client logos strip | Medium |
| v2.1 | Partnership / white-label landing page | Low |
| v2.2 | Multi-language support | Low |
