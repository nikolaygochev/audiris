# Audiris — Project Context

## What This Is

Corporate website for **Audiris**, a software consultancy that started as a QA firm and expanded into automation, software development, and outsourcing.

**Tagline**: "Born in QA. Built for everything that comes after."

**Primary goal**: Lead generation — drive visitors to book a consultation or submit a contact form.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router, SSG) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 3 with custom brand tokens |
| Animation | Framer Motion 11 |
| Forms | React Hook Form + Zod |
| Email | Resend API |
| Analytics | Plausible (optional) |
| Booking | Calendly (optional) |
| Hosting | Vercel (auto-deploy on push to `main`) |
| Icons | Lucide React |

---

## Project Structure

```
app/                     # Next.js App Router pages
  layout.tsx             # Root layout: Navbar, Footer, CookieBanner, Plausible
  page.tsx               # Home page
  about/page.tsx
  contact/page.tsx
  case-studies/page.tsx  # Placeholder
  privacy-policy/page.tsx
  services/
    qa-testing/page.tsx
    automation-testing/page.tsx
    software-development/page.tsx
    outsourcing/page.tsx
  api/contact/route.ts   # POST — receives form, sends email via Resend

components/
  layout/                # Navbar, Footer, CookieBanner
  home/                  # Hero, SocialProof, ServicesOverview, WhyAudiris, OriginStory, HomeCTA
  services/              # ServicePage wrapper, ServiceHero, ProblemStatement, ProcessSteps, ToolsGrid, etc.
  about/                 # CompanyStory, Values, Team
  contact/               # ContactForm, ContactInfo, BookingSection
  ui/                    # Button, Card, Badge, SectionHeading, AnimatedSection, ToolChip

lib/
  content.ts             # ALL page copy — no hardcoded strings in JSX
  services.ts            # Service data: steps, tools, metadata for 4 services
  metadata.ts            # buildMetadata() helper for SEO per page

public/
  logo.svg / logo-dark.svg / logo-mark.svg
  og-image.png           # 1200×630 OG image

docs/                    # Comprehensive docs (product vision → architecture)
```

---

## Key Architectural Decisions

**Content in one place**: All copy lives in `lib/content.ts`. To change any text on the site, edit that file — not JSX.

**Service data driven**: `lib/services.ts` defines the 4 service pages (QA Testing, Automation Testing, Software Development, Outsourcing). Adding a new service means adding an entry here plus a new `app/services/<slug>/page.tsx`.

**SSG (Static Site Generation)**: All pages are statically generated at build time. There is no runtime database or CMS. The only dynamic endpoint is `POST /api/contact`.

**Form security**: Honeypot field (`_website`) silently rejects bots. Zod validates server-side regardless of client validation.

---

## Routes

| URL | Purpose |
|---|---|
| `/` | Home |
| `/about` | Company story, values, team |
| `/contact` | Contact form + Calendly booking |
| `/services/qa-testing` | QA service landing page |
| `/services/automation-testing` | Automation service landing page |
| `/services/software-development` | Dev service landing page |
| `/services/outsourcing` | Outsourcing service landing page |
| `/case-studies` | Placeholder (not yet built) |
| `/privacy-policy` | Legal |
| `POST /api/contact` | Contact form submission handler |

---

## Environment Variables

```bash
RESEND_API_KEY=re_...          # Required — email delivery
CONTACT_EMAIL=hello@audiris.com # Required — where form submissions go
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=  # Optional — analytics
NEXT_PUBLIC_CALENDLY_URL=      # Optional — booking widget
```

---

## Brand

- **Primary color**: Emerald (`brand-500` = `#059669`)
- **Accent**: Amber (`accent-500` = `#f59e0b`)
- **Font**: DM Sans (Google Fonts)
- **Tone**: Professional, quality-first, no jargon
- **Logo**: Geometric "A" with checkmark crossbar

---

## Development

```bash
npm install
cp .env.example .env.local   # Fill in real values
npm run dev                  # localhost:3000

npm run type-check           # TypeScript
npm run lint                 # ESLint
npm run build                # Production SSG build
```

Use `dev.sh` for start/stop/restart convenience:

```bash
./dev.sh start
./dev.sh stop
./dev.sh restart
```

Deploy: push to `main` → Vercel deploys automatically.

---

## What's Not Built Yet

- Case studies content (`/case-studies` is a placeholder)
- Team bios (`components/about/Team.tsx` has placeholder text)
- Blog / content marketing
- CMS integration (all content is code)
