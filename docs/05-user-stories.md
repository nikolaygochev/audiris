# User Stories & Acceptance Criteria
**Role:** Business Analyst
**Project:** Audiris — Corporate Website
**Version:** 1.0
**Date:** 2026-03-30

---

## Navigation & Layout

### US-201 — Sticky Navigation Bar
**As a** visitor browsing any page,
**I want** the navigation bar to remain visible as I scroll,
**So that** I can navigate to any section without scrolling back to the top.

**Acceptance Criteria:**
- **Given** any page on the site, **when** the user scrolls down, **then** the navbar remains fixed at the top of the viewport
- **Given** the navbar, **when** rendered on desktop (≥ 768px), **then** it shows: logo (left), nav links (centre), "Get in touch" CTA button (right)
- **Given** the navbar, **when** scrolled past the hero, **then** a subtle background (`bg-white/90 backdrop-blur-sm`) and border appear
- **Given** the "Get in touch" button, **when** clicked, **then** the user is navigated to `/contact`
- **Given** a nav link for the current page, **when** rendered, **then** it has an emerald underline indicator

---

### US-202 — Mobile Navigation
**As a** mobile user,
**I want** a hamburger menu,
**So that** I can navigate the site on a small screen without the nav links cluttering the interface.

**Acceptance Criteria:**
- **Given** a screen width < 768px, **when** the page loads, **then** the desktop nav links are hidden and a hamburger icon is shown
- **Given** the hamburger icon, **when** clicked, **then** a full-screen overlay nav opens with all links and the CTA button
- **Given** the overlay nav is open, **when** a link is clicked, **then** the overlay closes and the user is navigated to the selected page
- **Given** the overlay nav is open, **when** the close (×) button or outside area is tapped, **then** the overlay closes

---

## Home Page

### US-301 — Hero: Immediate Value Proposition
**As a** first-time visitor,
**I want** to immediately understand what Audiris does and who it's for,
**So that** I can decide within seconds whether to keep reading.

**Acceptance Criteria:**
- **Given** the home page, **when** it loads on desktop, **then** the hero headline, sub-headline, and both CTA buttons are fully visible above the fold without scrolling
- **Given** the hero, **when** rendered, **then** the headline reads "Born in QA. Built for everything that comes after."
- **Given** the primary CTA button, **when** clicked, **then** the user is navigated to `/contact`
- **Given** the secondary CTA ("See our services"), **when** clicked, **then** the page smooth-scrolls to the `#services` section
- **Given** the hero on mobile (< 768px), **when** rendered, **then** the headline is legible (min 32px) and both buttons are stacked and full-width

---

### US-302 — Services Overview
**As a** prospect landing on the home page,
**I want** to see all four services at a glance,
**So that** I know the full scope of what Audiris offers without navigating away.

**Acceptance Criteria:**
- **Given** the services section, **when** rendered, **then** exactly 4 service cards are displayed: QA & Testing, Automation Testing, Software Development, Outsourcing
- **Given** each service card, **when** rendered, **then** it contains: an icon, the service name, a 2-sentence description, and a "Learn more →" link
- **Given** a service card, **when** hovered (desktop), **then** it lifts with a shadow transition (200ms)
- **Given** each "Learn more →" link, **when** clicked, **then** the user is navigated to the corresponding service page
- **Given** the services section on mobile, **when** rendered, **then** cards are stacked in a single column

---

### US-303 — Why Audiris Differentiators
**As a** prospect comparing Audiris to competitors,
**I want** to see clear differentiators,
**So that** I understand what makes Audiris a better choice.

**Acceptance Criteria:**
- **Given** the "Why Audiris" section, **when** rendered, **then** it contains 3–4 differentiator items, each with an icon, title, and 2-line description
- **Given** the section, **when** rendered, **then** the background is Slate 900 (dark), providing strong visual contrast from adjacent sections
- **Given** the differentiators, **when** rendered, **then** they include "Quality-first DNA" and "Automation-first" as the first two items

---

### US-304 — Social Proof
**As a** sceptical prospect,
**I want** to see evidence that other companies trust Audiris,
**So that** I feel confident reaching out.

**Acceptance Criteria:**
- **Given** the social proof section at launch (no logos available), **when** rendered, **then** 3 stat/metric cards are displayed (e.g. "10+ years QA expertise")
- **Given** client logos become available post-launch, **when** added, **then** they replace the stat cards as a grayscale logo strip
- **Given** testimonials become available post-launch, **when** added, **then** they are displayed as cards with quote, name, role, and company

---

### US-305 — Final CTA
**As a** visitor who has read the full home page,
**I want** a clear final prompt to get in touch,
**So that** I know exactly what to do next.

**Acceptance Criteria:**
- **Given** the bottom CTA section, **when** rendered, **then** it contains a heading, supporting sentence, and a "Get in touch" button
- **Given** the CTA button, **when** clicked, **then** the user is navigated to `/contact`
- **Given** the section, **when** rendered, **then** its background is Emerald (`#059669`) with white text

---

## Service Pages

### US-401 — Service Page Structure
**As a** prospect evaluating a specific service,
**I want** a dedicated page with in-depth information,
**So that** I can fully assess whether Audiris's offering fits my needs.

**Acceptance Criteria:**
- **Given** any `/services/*` page, **when** rendered, **then** it contains in order: hero, problem statement, solution narrative, process steps, tools grid, related services, and a CTA section
- **Given** the service hero, **when** rendered, **then** it shows the service name, a benefit-led subtitle, and a "Talk to an expert" button linking to `/contact`
- **Given** a service page, **when** rendered, **then** its `<title>` and meta description are unique and reference the specific service

---

### US-402 — Process Steps
**As a** prospect evaluating a service,
**I want** to see Audiris's delivery process step by step,
**So that** I can picture what working with them actually looks like.

**Acceptance Criteria:**
- **Given** any service page, **when** rendered, **then** the process section shows 3–5 numbered steps
- **Given** each step, **when** rendered, **then** it shows: an emerald numbered circle, a step title, and a 1–2 sentence description
- **Given** the process section on desktop, **when** rendered, **then** steps are displayed horizontally as a timeline
- **Given** the process section on mobile, **when** rendered, **then** steps are stacked vertically

---

### US-403 — Tools & Technologies
**As a** technical buyer,
**I want** to see what tools and technologies Audiris uses,
**So that** I can assess whether they're compatible with my existing stack.

**Acceptance Criteria:**
- **Given** any service page, **when** rendered, **then** the tools section shows at least 4 tools relevant to that service
- **Given** a tool entry, **when** rendered, **then** it shows the tool name (and logo if available, text-only fallback if not)
- **Given** the tools section, **when** rendered, **then** items are displayed in a responsive grid (4 columns desktop, 2 columns mobile)

---

### US-405 — Mobile Sticky CTA
**As a** mobile user reading a long service page,
**I want** a persistent contact prompt,
**So that** I can enquire without having to scroll back to find a CTA.

**Acceptance Criteria:**
- **Given** a service page on mobile (< 768px), **when** the user has scrolled past 50% of the page, **then** a sticky bottom bar appears with a "Get in touch" button
- **Given** the sticky bar is visible, **when** the button is clicked, **then** the user is navigated to `/contact`
- **Given** the sticky bar, **when** the (×) close icon is tapped, **then** the bar is dismissed and does not reappear during that session
- **Given** a desktop viewport (≥ 768px), **when** the page renders, **then** the sticky bar is never shown

---

## About Page

### US-501 — Company Story
**As a** prospect evaluating Audiris,
**I want** to read the company's founding story and how it has evolved,
**So that** I understand what makes Audiris unique compared to generic agencies.

**Acceptance Criteria:**
- **Given** the About page, **when** rendered, **then** there is a narrative section covering both the QA founding story and the evolution to full-service consultancy
- **Given** the story section, **when** rendered, **then** the pull quote *"Most software companies treat quality as a final step. We started there."* is prominently displayed
- **Given** the story section, **when** rendered on desktop, **then** it uses a two-column layout (text + visual)

---

### US-502 — Team Section
**As a** prospect,
**I want** to see who works at Audiris,
**So that** I can evaluate the people I'd be working with.

**Acceptance Criteria:**
- **Given** the team section with no real bios available (v1), **when** rendered, **then** placeholder cards with grey avatars and "Coming soon" label are shown
- **Given** real team bios are available, **when** added, **then** each card shows: circular photo, name, role, and a 2-sentence bio
- **Given** the team section, **when** rendered, **then** it uses a 3-column grid on desktop and 1 column on mobile

---

### US-503 — Values
**As a** prospect assessing cultural fit,
**I want** to see Audiris's stated values,
**So that** I know what kind of partner they are.

**Acceptance Criteria:**
- **Given** the values section, **when** rendered, **then** 3–5 values are displayed, each with an icon, title, and 2–3 sentence description
- **Given** the values, **when** rendered, **then** they include "Quality without compromise" and "Honest communication"

---

## Contact Page

### US-601 — Enquiry Form
**As a** prospect,
**I want** to send an enquiry via a form,
**So that** I can start a conversation with Audiris without needing to open my email client.

**Acceptance Criteria:**
- **Given** the contact form, **when** all required fields are filled and the form is submitted, **then** a success message is shown: "Thank you! We'll be in touch within 1 business day."
- **Given** the contact form, **when** a required field is empty and the user attempts to submit, **then** an inline error message appears below that field
- **Given** the email field, **when** a value without "@" is entered and the user tabs away, **then** an inline validation error "Please enter a valid email address" is shown
- **Given** the form is successfully submitted, **when** Audiris views their inbox, **then** they receive an email with the subject "New enquiry from [name] — [company]" containing all submitted fields
- **Given** the submit button, **when** the form is being submitted, **then** the button shows a loading spinner and is disabled to prevent double submission
- **Given** the Resend API returns an error, **when** the user submits, **then** the error message "Something went wrong. Please email us directly at [email]" is shown
- **Given** the honeypot field is filled (bot submission), **when** the API route receives it, **then** it returns `200 OK` but discards the submission silently

---

### US-602 — Call Booking
**As a** prospect who prefers to talk rather than write,
**I want** to book a discovery call directly from the contact page,
**So that** I can skip the email back-and-forth.

**Acceptance Criteria:**
- **Given** the contact page, **when** rendered, **then** a "Prefer to talk?" section is visible alongside the form
- **Given** a Calendly URL is configured, **when** the section renders, **then** an inline Calendly widget or prominent "Book a call" button is shown
- **Given** a Calendly URL is not yet configured, **when** the section renders, **then** the text "Email us to schedule a call" with the email address is shown as fallback

---

## SEO & Analytics

### US-701 — Page Metadata
**As** the Audiris website,
**I want** each page to have unique, optimised metadata,
**So that** search engines correctly index and rank each page independently.

**Acceptance Criteria:**
- **Given** any page, **when** inspected in a browser, **then** the `<title>` tag is unique and follows the format: "[Page Name] | Audiris"
- **Given** any page, **when** inspected, **then** a `<meta name="description">` tag is present and between 120–160 characters
- **Given** the home page, **when** shared on social media, **then** the og:title, og:description, and og:image are correctly populated
- **Given** the `/services/*` pages, **when** inspected, **then** each has a unique description referencing the specific service and a relevant keyword

---

### US-703 — Sitemap & Robots
**As** a search engine crawler,
**I want** a sitemap and robots.txt,
**So that** I can efficiently discover and index all Audiris pages.

**Acceptance Criteria:**
- **Given** `audiris.com/sitemap.xml`, **when** accessed, **then** it lists all public pages (home, all service pages, about, contact, case-studies)
- **Given** `audiris.com/robots.txt`, **when** accessed, **then** it allows all crawlers and references the sitemap URL
- **Given** the `/privacy-policy` page, **when** the robots.txt is checked, **then** it is not excluded from indexing

---

## Legal & Compliance

### US-801 — Cookie Consent
**As a** EU visitor,
**I want** to control whether I am tracked,
**So that** I can use the site with confidence that my preferences are respected.

**Acceptance Criteria:**
- **Given** a first-time visitor, **when** the page loads, **then** a cookie consent banner is visible at the bottom of the screen
- **Given** the banner, **when** "Accept" is clicked, **then** analytics tracking begins and the preference is saved to `localStorage`
- **Given** the banner, **when** "Decline" is clicked, **then** no analytics tracking fires and the preference is saved to `localStorage`
- **Given** a returning visitor whose preference is already saved, **when** they visit any page, **then** the banner is not shown
- **Given** the banner, **when** rendered, **then** it contains a link to `/privacy-policy`
