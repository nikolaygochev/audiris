# Audiris — Corporate Website

Professional website for Audiris, an IT and software consultancy specialising in QA, Automation Testing, Software Development, and Outsourcing.

Built with **Next.js 14 (App Router, SSG)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Deployed on **Vercel**.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router, SSG) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Email | Resend |
| Font | DM Sans via next/font |
| Analytics | Plausible (or GA4) |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/your-org/audiris.git
cd audiris

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values (see Environment Variables below)

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | API key from [resend.com](https://resend.com/api-keys) |
| `CONTACT_EMAIL` | Yes | Email address that receives form submissions |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | No | Your domain registered in Plausible |
| `NEXT_PUBLIC_CALENDLY_URL` | No | Calendly booking URL — shows email fallback if unset |

> **Security:** Never commit `.env.local`. It is gitignored.

---

## Project Structure

```
audiris/
├── app/                     # Next.js App Router pages & API
│   ├── layout.tsx           # Root layout (Navbar, Footer, Analytics, Cookie banner)
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── about/page.tsx
│   ├── services/
│   │   ├── qa-testing/page.tsx
│   │   ├── automation-testing/page.tsx
│   │   ├── software-development/page.tsx
│   │   └── outsourcing/page.tsx
│   ├── contact/page.tsx
│   ├── case-studies/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── api/contact/route.ts # Serverless contact form handler
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── layout/              # Navbar, Footer, CookieBanner
│   ├── home/                # Hero, SocialProof, ServicesOverview, …
│   ├── services/            # ServiceHero, ProcessSteps, ToolsGrid, …
│   ├── about/               # CompanyStory, Values, Team
│   ├── contact/             # ContactForm, BookingSection, ContactInfo
│   └── ui/                  # Button, Card, Badge, SectionHeading, AnimatedSection
│
├── lib/
│   ├── content.ts           # All page copy (no hardcoded strings in JSX)
│   ├── services.ts          # Service page data (steps, tools, metadata)
│   └── metadata.ts          # SEO metadata helpers
│
├── public/                  # Static assets (logos, OG image)
├── docs/                    # Project documentation & architecture
├── .env.example             # Environment variable template
├── next.config.js           # Security headers, Next.js config
├── tailwind.config.ts       # Brand design tokens
└── tsconfig.json            # TypeScript strict config
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Build for production (SSG) |
| `npm run start` | Start production server locally |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |

### Dev Server Helper

`dev.sh` wraps `npm run dev` with start/stop/restart support:

```bash
./dev.sh start    # start in background
./dev.sh stop     # stop
./dev.sh restart  # restart
```

---

## Deployment

This project is configured for **Vercel**. Every push to `main` triggers an automatic deploy.

### Deploy to Vercel

1. Connect your GitHub repository in [vercel.com/new](https://vercel.com/new)
2. Add environment variables in Vercel project settings
3. Deploy — Vercel auto-detects Next.js

### Pre-launch Checklist

- [ ] Domain registered and DNS pointed to Vercel
- [ ] `RESEND_API_KEY` set in Vercel env vars
- [ ] `CONTACT_EMAIL` set in Vercel env vars
- [ ] SPF/DKIM DNS records configured for email domain
- [ ] Calendly URL configured (or intentionally left blank)
- [ ] All page copy reviewed and approved
- [ ] Lighthouse ≥ 90 on mobile and desktop
- [ ] All forms tested end-to-end
- [ ] `npm audit` — no high/critical vulnerabilities
- [ ] Google Search Console property created, sitemap submitted

---

## Content Updates

All copy lives in [`lib/content.ts`](lib/content.ts) and [`lib/services.ts`](lib/services.ts). No JSX files need to change for text edits.

---

## Architecture

See [`docs/08-solution-architecture.md`](docs/08-solution-architecture.md) for the full solution architecture including C1/C2/C3 diagrams, data flow, deployment topology, and architecture decision records.

---

## License

Private — All rights reserved © Audiris
