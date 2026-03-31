# Product Backlog
**Role:** Product Owner
**Project:** Audiris — Corporate Website
**Version:** 1.0
**Date:** 2026-03-30

---

## Prioritisation Framework

**MoSCoW:**
- **M** — Must Have (launch blocker)
- **S** — Should Have (important, not a blocker)
- **C** — Could Have (nice to have)
- **W** — Won't Have (out of scope for v1)

**Story Points:** Fibonacci scale (1, 2, 3, 5, 8, 13)

---

## Epic Overview

| ID | Epic | Priority | Total SP | Status |
|----|------|----------|----------|--------|
| E1 | Brand & Design System | M | 8 | Ready |
| E2 | Site Foundation & Navigation | M | 5 | Ready |
| E3 | Home Page | M | 13 | Ready |
| E4 | Service Pages (×4) | M | 20 | Ready |
| E5 | About Page | S | 8 | Ready |
| E6 | Contact Page & Form | M | 8 | Ready |
| E7 | SEO & Analytics | M | 5 | Ready |
| E8 | Legal & Compliance | M | 3 | Ready |
| E9 | Case Studies (placeholder) | C | 2 | Ready |
| E10 | Blog / Resources | W | — | Backlog |

---

## E1 — Brand & Design System

| ID | User Story | Priority | SP |
|----|-----------|----------|-----|
| US-101 | As a visitor, I want a consistent visual identity across all pages so that I perceive Audiris as a professional company | M | 3 |
| US-102 | As a developer, I want reusable UI components (Button, Card, Badge, SectionHeading) so that the site is built consistently and efficiently | M | 5 |

**Definition of Done — E1:**
- [ ] Tailwind design tokens defined (colours, spacing, typography)
- [ ] Logo SVG assets in `/public`
- [ ] Shared UI component library scaffolded in `/components/ui`
- [ ] DM Sans font loaded via next/font

---

## E2 — Site Foundation & Navigation

| ID | User Story | Priority | SP |
|----|-----------|----------|-----|
| US-201 | As a visitor, I want a sticky navigation bar so that I can access any section of the site at any time | M | 3 |
| US-202 | As a mobile user, I want a hamburger menu so that I can navigate on small screens | M | 2 |

**Definition of Done — E2:**
- [ ] Next.js 14 App Router project initialised with TypeScript
- [ ] Tailwind CSS v3 configured with brand tokens
- [ ] Navbar component: logo left, links centre, CTA button right
- [ ] Mobile nav: hamburger → slide-in overlay
- [ ] Footer: nav links, services, contact info, social links, copyright
- [ ] Active route highlighted in navbar

---

## E3 — Home Page

| ID | User Story | Priority | SP |
|----|-----------|----------|-----|
| US-301 | As a first-time visitor, I want to immediately understand what Audiris does so that I can assess relevance without scrolling | M | 3 |
| US-302 | As a prospect, I want to see the four services at a glance so that I know what Audiris offers | M | 2 |
| US-303 | As a sceptical buyer, I want to see why I should choose Audiris so that I can differentiate it from competitors | M | 3 |
| US-304 | As a prospect, I want to see social proof (logos or testimonials) so that I trust Audiris before making contact | S | 3 |
| US-305 | As a visitor at the end of the page, I want a clear call to action so that I know the next step | M | 2 |

**Definition of Done — E3:**
- [ ] Hero section with headline, sub-headline, primary CTA, secondary CTA
- [ ] Services overview: 4 cards with icon, name, description, link
- [ ] "Why Audiris" section: 3–4 differentiator cards
- [ ] Social proof: logo strip or testimonial (placeholder acceptable for launch)
- [ ] Company origin story teaser ("Born in QA")
- [ ] Final CTA section
- [ ] Scroll-reveal animations (Framer Motion)
- [ ] Page passes Lighthouse ≥ 90

---

## E4 — Service Pages (×4)

Applies to: `/services/qa-testing`, `/services/automation-testing`, `/services/software-development`, `/services/outsourcing`

| ID | User Story | Priority | SP |
|----|-----------|----------|-----|
| US-401 | As a prospect evaluating a specific service, I want a dedicated page so that I get in-depth information about what Audiris delivers | M | 3 |
| US-402 | As a prospect, I want to understand Audiris's delivery process step by step so that I can picture working with them | M | 5 |
| US-403 | As a technical buyer, I want to see the tools and technologies Audiris uses so that I know they're up to date | M | 3 |
| US-404 | As a prospect at the end of a service page, I want to be prompted to get in touch so that I know how to proceed | M | 2 |
| US-405 | As a mobile user reading a long service page, I want a sticky contact prompt so that I can enquire without scrolling back up | S | 2 |

**Definition of Done — E4:**
- [ ] Shared `ServicePage` layout component
- [ ] Each page: hero, problem statement, solution, process steps (3–5), tools grid, CTA
- [ ] Content for all 4 services populated
- [ ] SEO metadata unique per page
- [ ] Internal links between related services

---

## E5 — About Page

| ID | User Story | Priority | SP |
|----|-----------|----------|-----|
| US-501 | As a prospect, I want to know the company's founding story and evolution so that I understand what makes Audiris unique | S | 3 |
| US-502 | As a prospect, I want to see the team behind Audiris so that I trust the people I'd be working with | S | 3 |
| US-503 | As a prospect, I want to understand Audiris's values so that I can assess cultural fit | S | 2 |

**Definition of Done — E5:**
- [ ] Company story section (founding → evolution)
- [ ] Mission and values (3–5 values with icons)
- [ ] Team section (placeholder cards with "Coming soon" if bios not ready)
- [ ] CTA: "Work with us" → `/contact`

---

## E6 — Contact Page & Form

| ID | User Story | Priority | SP |
|----|-----------|----------|-----|
| US-601 | As a prospect, I want to send an enquiry so that I can start a conversation with Audiris | M | 5 |
| US-602 | As a prospect who prefers scheduling, I want to book a call directly so that I avoid email back-and-forth | S | 2 |
| US-603 | As a prospect, I want to see contact details so that I can reach Audiris via my preferred channel | M | 1 |

**Definition of Done — E6:**
- [ ] Contact form: name, company, email, service interest (dropdown), message, honeypot
- [ ] Form validation: client-side + server-side
- [ ] Submission handler via Resend API (`/api/contact` route)
- [ ] Success and error states shown to user
- [ ] Calendly embed or booking link
- [ ] Email address and LinkedIn displayed
- [ ] Form submission triggers email to Audiris inbox

---

## E7 — SEO & Analytics

| ID | User Story | Priority | SP |
|----|-----------|----------|-----|
| US-701 | As Audiris, I want each page to have unique SEO metadata so that search engines can index and rank the site | M | 2 |
| US-702 | As Audiris, I want visitor analytics so that I can measure performance and iterate | M | 2 |
| US-703 | As Audiris, I want a sitemap and robots.txt so that search engines can crawl the site efficiently | M | 1 |

**Definition of Done — E7:**
- [ ] `generateMetadata` on every page (title, description, og:image)
- [ ] `sitemap.xml` auto-generated by Next.js
- [ ] `robots.txt` configured
- [ ] Plausible or GA4 script integrated
- [ ] Structured data (JSON-LD) on home and service pages

---

## E8 — Legal & Compliance

| ID | User Story | Priority | SP |
|----|-----------|----------|-----|
| US-801 | As a EU visitor, I want a cookie consent banner so that I can control my tracking preferences | M | 2 |
| US-802 | As a visitor, I want to read Audiris's privacy policy so that I understand how my data is used | M | 1 |

**Definition of Done — E8:**
- [ ] Cookie consent banner (accept/decline)
- [ ] Analytics only fires after consent
- [ ] `/privacy-policy` page with GDPR-compliant content
- [ ] HTTPS enforced (handled by Vercel)

---

## E9 — Case Studies Placeholder

| ID | User Story | Priority | SP |
|----|-----------|----------|-----|
| US-901 | As a prospect, I want to see a case studies section so that I know Audiris has a plan to share proof of work | C | 2 |

**Definition of Done — E9:**
- [ ] `/case-studies` page with "Coming soon" state and CTA
- [ ] Linked from navbar and homepage

---

## Release Plan

### Sprint 1 — Foundation (Week 1–2)
E1 (Brand & Design System) + E2 (Site Foundation) + E7 (SEO scaffolding) + E8 (Legal)

### Sprint 2 — Core Pages (Week 3–4)
E3 (Home Page) + E6 (Contact Page)

### Sprint 3 — Service & About Pages (Week 5–6)
E4 (Service Pages ×4) + E5 (About Page) + E9 (Case Studies placeholder)

### Post-launch
E10 (Blog), real testimonials, case studies content, CMS integration
