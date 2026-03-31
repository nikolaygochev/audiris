# Business Requirements Document (BRD)
**Role:** Business Analyst
**Project:** Audiris — Corporate Website
**Version:** 1.0
**Date:** 2026-03-30

---

## 1. Business Context

Audiris is an IT and software consultancy founded with deep expertise in Quality Assurance and Automation & Performance Testing. The company has evolved into a broader software services provider, now offering Software Development and Outsourcing alongside its QA roots.

The company requires a professional website that serves two primary business functions:
1. **Lead generation** — convert visitors into qualified enquiries and booked calls
2. **Brand credibility** — position Audiris as an expert, trustworthy partner

---

## 2. Stakeholder Register

| Stakeholder | Role | Interest | Influence |
|-------------|------|----------|-----------|
| Audiris Founder / Management | Owner, decision-maker | Business goals, brand representation | High |
| Sales / Business Development | Primary beneficiary of leads | Lead quality, contact form data | High |
| Potential Clients | Primary audience | Clear service info, trust signals | High |
| Developer (Claude Code) | Implementation | Clear requirements, tech decisions | Medium |
| Search Engines (Google) | Distribution channel | SEO compliance, performance | Medium |

---

## 3. Business Objectives

| ID | Objective | Measurable Outcome |
|----|-----------|-------------------|
| BO-01 | Establish a credible digital presence for Audiris | Site live, branded, mobile-responsive |
| BO-02 | Generate qualified inbound leads | ≥ 10 contact form submissions/month by month 3 |
| BO-03 | Enable prospects to self-educate on services | Service pages indexed by Google; avg 2+ min on site |
| BO-04 | Differentiate Audiris from generic agencies | Unique QA-origin narrative present on home + about |
| BO-05 | Support sales process | Contact page enables call booking; form data reaches sales inbox |
| BO-06 | Build organic search presence | ≥ 5 target keywords in top 20 within 6 months |

---

## 4. Business Rules

| ID | Rule |
|----|------|
| BR-01 | Every page must include at least one call to action linking to `/contact` |
| BR-02 | Contact form submissions must be delivered to Audiris email inbox within 5 minutes |
| BR-03 | No client name, logo, or project detail may be published without explicit written approval |
| BR-04 | All copy must reflect Audiris's tone of voice: professional, confident, approachable |
| BR-05 | Cookie tracking must only activate after explicit visitor consent (GDPR compliance) |
| BR-06 | The QA-origin story must appear on both the Home page and the About page |
| BR-07 | All four services must be presented with equal visual weight on the home page |
| BR-08 | The website must be accessible on all modern browsers and mobile devices |

---

## 5. Information Architecture

### Sitemap

```
audiris.com/
│
├── /                           Home
│
├── /services/
│   ├── /qa-testing             QA & Testing
│   ├── /automation-testing     Automation Testing
│   ├── /software-development   Software Development
│   └── /outsourcing            Outsourcing
│
├── /about                      About Audiris
│
├── /case-studies               Case Studies (placeholder v1)
│
├── /contact                    Contact & Enquiry
│
└── /privacy-policy             Privacy Policy
```

### Navigation Structure

**Primary navigation (desktop):**
`Logo` | `Services ▾` | `About` | `Case Studies` | `Contact` | `[Get in touch]` *(CTA button)*

**Services dropdown:**
- QA & Testing
- Automation Testing
- Software Development
- Outsourcing

**Footer navigation:**
- Company: About, Contact, Privacy Policy
- Services: (all 4)
- Social: LinkedIn, (others TBD)

---

## 6. Content Requirements

### Home Page Content

| Section | Content needed | Owner |
|---------|---------------|-------|
| Hero headline | "Born in QA. Built for everything that comes after." | Audiris |
| Hero sub-headline | Value proposition (1–2 sentences) | Audiris |
| Services section title | "What we do" or similar | Audiris |
| Service card descriptions | 1-sentence per service (×4) | Audiris |
| Why Audiris differentiators | 3–4 short points with icons | Audiris |
| Origin story teaser | 2–3 sentences | Audiris |
| Social proof | Client logos or 1–2 testimonial quotes | Audiris |
| Final CTA | Headline + supporting text + button label | Audiris |

### Service Page Content (×4)

| Element | Required per page |
|---------|------------------|
| Hero headline | Service name + benefit subtitle |
| Problem statement | 2–3 sentences: the pain Audiris solves |
| Solution narrative | 2–3 sentences: how Audiris solves it |
| Process steps | 3–5 numbered steps with title + description |
| Tools / technologies | Logos or names list |
| CTA | "Talk to an expert" → `/contact` |

### About Page Content

| Element | Required |
|---------|---------|
| Founding story | 3–5 sentences |
| Evolution narrative | How QA-only became full-service |
| Mission statement | 1–2 sentences |
| Values | 3–5 values with title + description |
| Team | Photos + name + role + bio (placeholder acceptable) |

---

## 7. Integration Requirements

| Integration | Purpose | Service | Notes |
|-------------|---------|---------|-------|
| Email delivery | Contact form submissions | Resend API | Free tier: 3,000 emails/month |
| Calendar booking | Discovery call scheduling | Calendly | Free tier sufficient |
| Analytics | Visitor tracking | Plausible or GA4 | Must respect cookie consent |
| Cookie consent | GDPR compliance | Custom component | No third-party required |
| Hosting & deployment | Site delivery | Vercel | Free tier: adequate for v1 |
| DNS | Domain routing | Provider TBD | Domain must be registered |

---

## 8. Constraints

| ID | Constraint | Impact |
|----|-----------|--------|
| C-01 | No backend server — serverless only | Form handling via Resend API route in Next.js |
| C-02 | No CMS at launch | Content hardcoded in components/constants |
| C-03 | No existing client logos or testimonials | Placeholder strategy required |
| C-04 | Single developer using Claude Code | Requirements must be precise and unambiguous |
| C-05 | GDPR compliance required | Analytics and forms must handle consent |
| C-06 | Domain registration status unknown | Must verify availability of audiris.com |

---

## 9. Assumptions

| ID | Assumption |
|----|-----------|
| A-01 | The Resend API key will be provided before Sprint 2 |
| A-02 | A Calendly account will be set up before launch |
| A-03 | Domain will be registered and pointed to Vercel before launch |
| A-04 | Final copy for all pages will be reviewed and approved by Audiris before launch |
| A-05 | Logo SVG files (already created) are approved for use |
| A-06 | No photography is available at launch — stock or abstract visuals only |

---

## 10. Risks

| ID | Risk | Likelihood | Impact | Mitigation |
|----|------|-----------|--------|-----------|
| R-01 | Content not ready at build time | Medium | High | Use placeholder copy; define content checklist |
| R-02 | Domain not available / not set up in time | Low | High | Check availability immediately; use Vercel subdomain as fallback |
| R-03 | Contact form emails go to spam | Medium | High | Configure SPF/DKIM via Resend; test before launch |
| R-04 | Low organic traffic in first months | High | Medium | Supplement with LinkedIn posts; focus on long-tail keywords |
| R-05 | Competitor copies positioning | Low | Low | Regularly update content and case studies post-launch |
