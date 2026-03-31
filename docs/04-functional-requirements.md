# Functional Requirements Specification (FRS)
**Role:** Business Analyst
**Project:** Audiris — Corporate Website
**Version:** 1.0
**Date:** 2026-03-30

---

## 1. Global / Layout Requirements

### FR-G01 — Navigation Bar
- Sticky positioned; remains visible on scroll
- Background: white with `backdrop-blur-sm` on scroll (subtle frosted glass)
- Left: Audiris logo SVG (links to `/`)
- Centre (desktop): Services (dropdown), About, Case Studies, Contact
- Right: "Get in touch" button (Emerald, links to `/contact`)
- Mobile (< 768px): hamburger icon replaces centre links; tapping opens full-screen overlay nav
- Active page: current nav item underlined with emerald colour
- Services dropdown: appears on hover/click; lists all 4 service pages

### FR-G02 — Footer
- Four columns (desktop), stacked (mobile):
  - Column 1: Logo + tagline + short description (max 2 lines)
  - Column 2: Services links (all 4)
  - Column 3: Company links (About, Case Studies, Contact, Privacy Policy)
  - Column 4: Contact info (email, LinkedIn)
- Bottom bar: copyright © Audiris {year}, privacy policy link
- Background: Slate 900 (`#0F172A`), text: Slate 400

### FR-G03 — Cookie Consent Banner
- Appears on first visit, bottom of screen
- Two actions: "Accept" and "Decline"
- Accepting fires analytics; declining suppresses it
- Preference stored in `localStorage`; banner not shown on subsequent visits
- Links to `/privacy-policy`

### FR-G04 — Scroll Reveal Animations
- All section blocks animate in on scroll (fade up, 0.3s ease)
- Implemented via Framer Motion `whileInView`
- Must respect `prefers-reduced-motion` — disable animations if set

### FR-G05 — Scroll to Top
- Button appears after user scrolls > 400px
- Smooth scrolls to top on click

---

## 2. Home Page (`/`)

### FR-H01 — Hero Section
- Full viewport height on desktop; auto on mobile
- Background: off-white (`#F8FAFC`) with subtle emerald geometric pattern (CSS or SVG)
- **Headline:** "Born in QA. Built for everything that comes after." — `text-5xl font-bold text-slate-900`
- **Sub-headline:** 1–2 sentences, `text-xl text-slate-600`
- **Primary CTA button:** "Book a free consultation" → `/contact` — Emerald background
- **Secondary CTA button:** "See our services" → `#services` (smooth scroll) — Outlined style
- Both buttons stack vertically on mobile
- No stock photos of people — abstract/geometric visual only

### FR-H02 — Social Proof Bar
- Positioned immediately below hero
- Label: "Trusted by teams at" (left-aligned, muted text)
- If client logos available: grayscale logo strip
- If no logos available: 3 stat cards (e.g. "10+ years QA expertise", "50+ projects delivered", "4 service lines")
- Background: White, subtle top/bottom border

### FR-H03 — Services Overview Section
- Section anchor: `id="services"`
- Section title: "What we do"
- 2×2 grid (desktop), 1 column (mobile)
- Each card:
  - Lucide React icon (emerald colour)
  - Service name (`font-semibold text-slate-900`)
  - 2-sentence description (`text-slate-600`)
  - "Learn more →" link to service page (emerald colour, hover underline)
  - Hover: card lifts with `shadow-md` transition (200ms ease)

| Service | Icon (Lucide) | Link |
|---------|--------------|------|
| QA & Testing | `ShieldCheck` | `/services/qa-testing` |
| Automation Testing | `Zap` | `/services/automation-testing` |
| Software Development | `Code2` | `/services/software-development` |
| Outsourcing | `Users` | `/services/outsourcing` |

### FR-H04 — Why Audiris Section
- Background: Slate 900 (dark section for contrast)
- Title: "Why Audiris?" — white text
- 3–4 differentiator items in a horizontal row (desktop), stacked (mobile)
- Each item: emerald icon + bold title (white) + 2-line description (slate-400)

| # | Title | Description |
|---|-------|-------------|
| 1 | Quality-first DNA | We started in QA. Every line of code we write or test carries that standard. |
| 2 | Automation-first | We don't add automation later — we design for it from day one. |
| 3 | Transparent delivery | Regular updates, clear metrics, no surprises. You always know where your project stands. |
| 4 | Fast onboarding | Our team is ready to integrate with your workflow within days, not months. |

### FR-H05 — Origin Story Teaser
- 2-column layout (desktop): text left, abstract visual right
- Headline: "Where we started. Where we're going."
- Body: 3–4 sentences on company evolution from QA to full-service
- CTA: "Our story" → `/about` (text link with arrow)

### FR-H06 — Testimonials / Social Proof
- If testimonials available: card(s) with quote, name, role, company
- If no testimonials: show 3 metric cards (stats about Audiris)
- Background: Emerald 50 (`#ecfdf5`)
- This section is the placeholder — must be easy to swap content post-launch

### FR-H07 — Final CTA Section
- Full-width, Emerald background
- Headline: "Ready to build software you can ship with confidence?"
- Supporting text: 1 sentence
- Button: "Get in touch" → `/contact` — White background, emerald text

---

## 3. Service Pages (`/services/*`)

All four service pages share the same layout component with page-specific content passed as props/data.

### FR-S01 — Service Hero
- Full-width hero, white background
- Breadcrumb: `Home / Services / [Service Name]`
- Large service name heading + benefit-led subtitle
- CTA: "Talk to an expert" → `/contact`
- Decorative: service icon (large, emerald, right side on desktop)

### FR-S02 — Problem Statement
- Section: "The challenge"
- 3–4 sentences describing the pain point this service solves
- Left border accent (emerald, 4px) for visual distinction

### FR-S03 — Solution Narrative
- Section: "How we help"
- 3–4 sentences describing Audiris's approach
- Optional: 2–3 bullet points of key outcomes

### FR-S04 — Process Steps
- Section: "How we work"
- 3–5 numbered steps in horizontal timeline (desktop) / vertical (mobile)
- Each step: number (emerald circle), title, 1–2 sentence description

| Service | Steps |
|---------|-------|
| QA & Testing | Discovery → Test Strategy → Test Design → Execution → Reporting & Handover |
| Automation Testing | Audit → Framework Design → Script Development → CI/CD Integration → Maintenance |
| Software Development | Discovery → Architecture → Sprints → QA (built-in) → Deployment → Support |
| Outsourcing | Requirements → Candidate Matching → Onboarding → Delivery → Review |

### FR-S05 — Tools & Technologies Grid
- Section: "Tools & technologies"
- Grid of tool names (with logo if available, text fallback)
- Tools per service:

| Service | Tools |
|---------|-------|
| QA & Testing | Selenium, Postman, TestRail, Jira, Zephyr, BrowserStack |
| Automation Testing | Cypress, Playwright, Appium, Selenium Grid, Jenkins, GitHub Actions, k6 |
| Software Development | React, Next.js, Node.js, Python, PostgreSQL, AWS, Docker |
| Outsourcing | Flexible stack matching client needs; NDA-ready |

### FR-S06 — Related Services
- Section: "You may also be interested in"
- 2 cards linking to the most complementary services
- Same card style as homepage services overview

### FR-S07 — Page CTA
- Full-width section, Slate 900 background
- "Ready to get started with [Service Name]?"
- Button: "Talk to an expert" → `/contact`

### FR-S08 — Mobile Sticky CTA
- After scrolling 50% of page, a sticky bottom bar appears on mobile
- Contains: "Get in touch" button → `/contact`
- Dismissible via close (×) icon
- Does not appear on desktop

---

## 4. About Page (`/about`)

### FR-A01 — Company Story
- Two sub-sections:
  1. "Where we started" — QA/automation founding story
  2. "Where we are now" — evolution into full-service consultancy
- Pull quote styled block (large emerald quotation mark): *"Most software companies treat quality as a final step. We started there."*

### FR-A02 — Mission & Values
- Mission statement: full-width, prominent
- Values grid: 3-column (desktop), 1-column (mobile)
- Each value: icon + title + 2–3 sentence description

| Value | Icon | Description |
|-------|------|-------------|
| Quality without compromise | `ShieldCheck` | Quality is not a phase — it's how we think from first line to last deploy. |
| Honest communication | `MessageSquare` | We say what we mean, report what we see, and never hide behind jargon. |
| Continuous improvement | `TrendingUp` | We test, learn, and improve — in our clients' codebases and in our own processes. |
| Partnership over service | `Handshake` | We're not a vendor. We're an extension of your team. |

### FR-A03 — Team Section
- Section: "The people behind Audiris"
- Grid of team cards: photo (circular), name, role, short bio (2 sentences)
- Placeholder state (v1): grey avatar + "Coming soon" label
- Must be easy to populate with real photos post-launch

### FR-A04 — CTA
- "Want to work with us?" → `/contact`

---

## 5. Contact Page (`/contact`)

### FR-C01 — Page Layout
- Two-column (desktop): form left, info right
- Single column (mobile)

### FR-C02 — Enquiry Form
**Fields:**

| Field | Type | Validation | Required |
|-------|------|-----------|---------|
| Full name | Text input | Min 2 chars | Yes |
| Company name | Text input | Min 2 chars | Yes |
| Email address | Email input | Valid email format | Yes |
| Service of interest | Select dropdown | One of: QA & Testing / Automation Testing / Software Development / Outsourcing / Not sure yet | Yes |
| Message | Textarea | Min 10 chars | No |
| Honeypot (bot trap) | Hidden text input | Must be empty on submit | N/A |

**Behaviour:**
- Client-side validation on blur and submit
- Error messages appear inline below each field
- On successful submission: form replaced by success message ("Thank you! We'll be in touch within 1 business day.")
- On failure: inline error message ("Something went wrong. Please email us directly at [email].")
- Submit button shows loading spinner during submission
- Submission handled by `/api/contact` → Resend API → Audiris inbox

### FR-C03 — Booking Section
- Heading: "Prefer to talk?"
- Calendly embed (inline widget) or button linking to Calendly URL
- Fallback if Calendly not configured: "Email us to schedule a call"

### FR-C04 — Contact Info Panel
- Email address (mailto link)
- LinkedIn URL
- Response time commitment: "We respond within 1 business day"

---

## 6. Case Studies Page (`/case-studies`)

### FR-CS01 — Placeholder State
- Heading: "Case Studies"
- Sub-heading: "Real results from real engagements — coming soon."
- Body: 2–3 sentences explaining what will be published
- CTA: "Tell us about your project" → `/contact`
- Background: consistent with rest of site

---

## 7. Privacy Policy Page (`/privacy-policy`)

### FR-PP01 — Content Requirements
- What data is collected (contact form fields, analytics)
- How data is used (responding to enquiries, improving the site)
- Third-party processors (Resend, analytics provider)
- Cookie usage and how to opt out
- Contact details for data requests
- Last updated date

---

## 8. API Route — Contact Form (`/api/contact`)

### FR-API01 — Request
- Method: `POST`
- Body: `{ name, company, email, service, message, honeypot }`
- Content-Type: `application/json`

### FR-API02 — Validation
- Honeypot field must be empty (bot detection)
- All required fields must be present and non-empty
- Email must match RFC 5322 format

### FR-API03 — Email Delivery
- Via Resend API
- From: `noreply@audiris.com` (or configured sender domain)
- To: Audiris business email
- Subject: `New enquiry from [name] — [company]`
- Body: all form fields formatted in HTML email

### FR-API04 — Responses
- `200 OK` — submission accepted, email queued
- `400 Bad Request` — validation failure (with field errors)
- `422 Unprocessable` — honeypot triggered (return 200 to bot, silently discard)
- `500 Internal Server Error` — Resend API failure
