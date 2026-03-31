// ─────────────────────────────────────────────────────────────────────────────
// lib/content.ts
// All page copy lives here. No hardcoded strings in JSX (NFR-M01).
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Audiris',
  tagline: 'Born in QA. Built for everything that comes after.',
  description:
    'Audiris is an IT and software consultancy delivering QA, automation testing, software development, and outsourcing services to teams that care about quality.',
  email: 'hello@audiris.com',
  linkedin: 'https://www.linkedin.com/company/audiris',
  url: 'https://audiris.com',
  responseTime: 'We respond within 1 business day.',
}

// ── HOME ─────────────────────────────────────────────────────────────────────

export const hero = {
  headline: 'Born in QA.\nBuilt for everything that comes after.',
  subheadline:
    'We started as quality engineers. Today we deliver QA, automation, software development, and outsourcing — with the same rigorous mindset that built our reputation.',
  primaryCta:  { label: 'Book a free consultation', href: '/contact' },
  secondaryCta: { label: 'See our services',        href: '/#services' },
}

export const socialProof = {
  label: 'Trusted by engineering teams at',
  stats: [
    { value: '10+', label: 'Years of QA expertise' },
    { value: '50+', label: 'Projects delivered' },
    { value: '4',   label: 'Service lines' },
  ],
}

export const servicesOverview = {
  sectionTitle: 'What we do',
  sectionSubtitle:
    'From quality assurance to full-service software delivery — everything we offer is built on a foundation of engineering rigour.',
}

export const whyAudiris = {
  sectionTitle: 'Why Audiris?',
  items: [
    {
      icon: 'ShieldCheck',
      title: 'Quality-first DNA',
      description:
        'We started in QA. Every line of code we write or test carries that standard.',
    },
    {
      icon: 'Zap',
      title: 'Automation-first',
      description:
        'We don\'t add automation later — we design for it from day one.',
    },
    {
      icon: 'LineChart',
      title: 'Transparent delivery',
      description:
        'Regular updates, clear metrics, no surprises. You always know where your project stands.',
    },
    {
      icon: 'Rocket',
      title: 'Fast onboarding',
      description:
        'Our team is ready to integrate with your workflow within days, not months.',
    },
  ],
}

export const originStory = {
  headline: 'Where we started.\nWhere we\'re going.',
  body: 'Audiris began as a specialist QA consultancy — because we believed quality shouldn\'t be an afterthought. As our clients\' needs grew, so did we. Today we design systems, build products, and scale engineering teams, all with the same quality-first mindset we started with.',
  cta: { label: 'Our story', href: '/about' },
}

export const homeCTA = {
  headline: 'Ready to build software you can ship with confidence?',
  subtext:  'Let\'s talk about your project. No obligation, just an honest conversation.',
  cta:      { label: 'Get in touch', href: '/contact' },
}

// ── ABOUT ────────────────────────────────────────────────────────────────────

export const companyStory = {
  whereWeStarted: {
    title: 'Where we started',
    body: 'Audiris was founded by engineers who had spent years catching bugs that should never have existed. We believed that quality wasn\'t a phase at the end of a project — it was a way of thinking from the very first line of code. So we built a consultancy around that belief.',
  },
  whereWeAreNow: {
    title: 'Where we are now',
    body: 'What began as specialist QA and automation services has evolved into a full-service software consultancy. Our clients kept asking us to do more — and we kept saying yes — because our quality-first approach turns out to be the right foundation for everything: architecture decisions, delivery cadence, team structure, and beyond.',
  },
  pullQuote:
    'Most software companies treat quality as a final step. We started there.',
}

export const missionStatement =
  'To help engineering teams ship software they\'re proud of — on time, on budget, with quality built in from the start.'

export const values = [
  {
    icon: 'ShieldCheck',
    title: 'Quality without compromise',
    description:
      'Quality is not a phase — it\'s how we think from first line to last deploy. We hold every engagement to the same standard, regardless of timeline pressure.',
  },
  {
    icon: 'MessageSquare',
    title: 'Honest communication',
    description:
      'We say what we mean, report what we see, and never hide behind jargon. If something is at risk, you\'ll hear it from us before it becomes a problem.',
  },
  {
    icon: 'TrendingUp',
    title: 'Continuous improvement',
    description:
      'We test, learn, and improve — in our clients\' codebases and in our own processes. Standing still isn\'t an option when the industry keeps moving.',
  },
  {
    icon: 'Handshake',
    title: 'Partnership over service',
    description:
      'We\'re not a vendor. We\'re an extension of your team. We care about your outcomes, not just our deliverables.',
  },
]

export const teamSection = {
  title: 'The people behind Audiris',
  placeholder: 'Real team bios and photos coming soon.',
}

// ── CONTACT ──────────────────────────────────────────────────────────────────

export const contactPage = {
  title: 'Get in touch',
  subtitle:
    'Tell us about your project and we\'ll get back to you within 1 business day.',
  bookingTitle: 'Prefer to talk?',
  bookingSubtitle: 'Book a 30-minute discovery call — no sales pitch, just an honest conversation.',
  bookingFallback: 'Email us to schedule a call',
  formSuccess:
    'Thank you! We\'ll be in touch within 1 business day.',
  formError:
    'Something went wrong. Please email us directly at hello@audiris.com',
  serviceOptions: [
    { value: 'qa-testing',           label: 'QA & Testing' },
    { value: 'automation-testing',   label: 'Automation Testing' },
    { value: 'software-development', label: 'Software Development' },
    { value: 'outsourcing',          label: 'Outsourcing' },
    { value: 'not-sure',             label: 'Not sure yet' },
  ],
}

// ── CASE STUDIES ─────────────────────────────────────────────────────────────

export const caseStudiesPage = {
  title: 'Case Studies',
  subtitle: 'Real results from real engagements — coming soon.',
  body: 'We\'re documenting the results we\'ve delivered for our clients. Our first case studies will be published shortly. In the meantime, we\'re happy to discuss our experience and approach on a call.',
  cta: { label: 'Tell us about your project', href: '/contact' },
}

// ── PRIVACY POLICY ───────────────────────────────────────────────────────────

export const privacyPolicy = {
  lastUpdated: '30 March 2026',
  intro:
    'Audiris ("we", "us", "our") is committed to protecting your personal data. This policy explains what we collect, why, and how you can exercise your rights.',
  sections: [
    {
      title: 'What data we collect',
      body: 'When you submit our contact form, we collect your full name, company name, email address, the service you\'re interested in, and any message you provide. We do not collect any other personal data through the website.',
    },
    {
      title: 'How we use your data',
      body: 'We use your contact form data solely to respond to your enquiry. We do not sell, rent, or share your data with third parties for marketing purposes.',
    },
    {
      title: 'Third-party processors',
      body: 'Your contact form submissions are transmitted via Resend (resend.com), our email delivery provider. Analytics data (if you have consented) is processed by Plausible Analytics or Google Analytics 4. Both providers operate under appropriate data processing agreements.',
    },
    {
      title: 'Cookies and analytics',
      body: 'We use a cookie consent banner to give you control over tracking. If you click "Accept", we load an analytics script that collects anonymised usage data (page views, referrer, browser). If you click "Decline", no analytics scripts are loaded and no cookies are set. You can change your preference at any time by clearing your browser\'s localStorage.',
    },
    {
      title: 'Your rights',
      body: 'Under GDPR you have the right to access, correct, or delete your personal data. To exercise any of these rights, email us at hello@audiris.com. We will respond within 30 days.',
    },
    {
      title: 'Data retention',
      body: 'Contact form submissions are retained in our email inbox for as long as required to respond to your enquiry and maintain a business record, and no longer than 2 years.',
    },
    {
      title: 'Contact',
      body: 'For data protection enquiries, contact hello@audiris.com.',
    },
  ],
}
