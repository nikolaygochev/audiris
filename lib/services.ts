// ─────────────────────────────────────────────────────────────────────────────
// lib/services.ts
// Service page data: process steps, tools, hero copy, and related services.
// ─────────────────────────────────────────────────────────────────────────────

export type ServiceId =
  | 'qa-testing'
  | 'automation-testing'
  | 'software-development'
  | 'outsourcing'

export interface ProcessStep {
  number: number
  title: string
  description: string
}

export interface ServiceData {
  id: ServiceId
  slug: string
  name: string
  icon: string
  shortDescription: string
  hero: {
    title: string
    subtitle: string
    cta: { label: string; href: string }
  }
  problem: {
    title: string
    body: string
  }
  solution: {
    title: string
    body: string
    outcomes: string[]
  }
  process: {
    title: string
    steps: ProcessStep[]
  }
  tools: {
    title: string
    items: string[]
  }
  cta: {
    headline: string
    buttonLabel: string
  }
  relatedIds: ServiceId[]
}

export const services: Record<ServiceId, ServiceData> = {
  'qa-testing': {
    id: 'qa-testing',
    slug: '/services/qa-testing',
    name: 'QA & Testing',
    icon: 'ShieldCheck',
    shortDescription:
      'Comprehensive manual and functional testing that catches defects before they reach production.',
    hero: {
      title: 'QA & Testing',
      subtitle:
        'Confidence in every release — from functional testing to exploratory QA, we ensure your software works the way it should.',
      cta: { label: 'Talk to an expert', href: '/contact' },
    },
    problem: {
      title: 'The challenge',
      body: 'Releasing software without robust QA means shipping risk. Defects discovered in production cost 10× more to fix than those caught during development. Without a structured testing strategy, teams ship bugs, lose user trust, and spend engineering cycles on rework instead of new features.',
    },
    solution: {
      title: 'How we help',
      body: 'We embed a structured QA process into your delivery cycle — from requirements analysis to production verification. Our QA engineers design test strategies tailored to your product, execute thorough test plans, and provide clear, actionable defect reports that your developers can act on immediately.',
      outcomes: [
        'Defect escape rate reduced by up to 70%',
        'Faster release cycles through shift-left testing',
        'Clear, prioritised defect reports developers can act on immediately',
      ],
    },
    process: {
      title: 'How we work',
      steps: [
        { number: 1, title: 'Discovery', description: 'We review your product, existing test coverage, and release cadence to understand where QA will add the most value.' },
        { number: 2, title: 'Test strategy', description: 'We define the test approach, coverage scope, environments, and tooling that fits your team\'s workflow.' },
        { number: 3, title: 'Test design', description: 'We write test cases, exploratory charters, and regression suites aligned to your acceptance criteria.' },
        { number: 4, title: 'Execution', description: 'We execute tests systematically across each release, logging defects with full reproduction steps and severity ratings.' },
        { number: 5, title: 'Reporting & handover', description: 'We deliver a clear quality report after each cycle and progressively transfer knowledge to your team.' },
      ],
    },
    tools: {
      title: 'Tools & technologies',
      items: ['Selenium', 'Postman', 'Rest-Assured', 'Java', 'TestRail', 'Jira', 'Zephyr', 'BrowserStack', 'Charles Proxy', 'Confluence', 'AI Tools'],
    },
    cta: {
      headline: 'Ready to get started with QA & Testing?',
      buttonLabel: 'Talk to an expert',
    },
    relatedIds: ['automation-testing', 'software-development'],
  },

  'automation-testing': {
    id: 'automation-testing',
    slug: '/services/automation-testing',
    name: 'Automation Testing',
    icon: 'Zap',
    shortDescription:
      'Scalable test automation frameworks that give your team fast, reliable feedback on every commit.',
    hero: {
      title: 'Automation Testing',
      subtitle:
        'Ship faster with confidence — we build automation frameworks that catch regressions in minutes, not days.',
      cta: { label: 'Talk to an expert', href: '/contact' },
    },
    problem: {
      title: 'The challenge',
      body: 'As codebases grow, manual regression testing becomes a release bottleneck. Teams slow down, confidence drops, and the temptation to skip testing grows. Without scalable automation, every release becomes a gamble — and technical debt accumulates in the test suite as fast as it does in the codebase.',
    },
    solution: {
      title: 'How we help',
      body: 'We design and build test automation frameworks from first principles — choosing the right tools, structuring tests for maintainability, and integrating them into your CI/CD pipeline so feedback arrives in minutes. We also audit and refactor existing automation that has become slow or brittle.',
      outcomes: [
        'Regression suite running in under 15 minutes on CI',
        'Test maintenance time reduced through the Page Object pattern and shared utilities',
        'Automated smoke tests block broken builds before they reach staging',
      ],
    },
    process: {
      title: 'How we work',
      steps: [
        { number: 1, title: 'Audit', description: 'We assess your current automation coverage, tooling, and CI/CD integration to identify gaps and quick wins.' },
        { number: 2, title: 'Framework design', description: 'We choose the right tools and architecture for your stack — Playwright, Cypress, Appium, or a hybrid approach.' },
        { number: 3, title: 'Script development', description: 'We write stable, maintainable tests using the Page Object Model or equivalent patterns, with clear naming conventions.' },
        { number: 4, title: 'CI/CD integration', description: 'We wire the suite into your pipeline — GitHub Actions, Jenkins, or your existing CI tooling — with fast feedback loops.' },
        { number: 5, title: 'Maintenance & handover', description: 'We establish a maintenance process and train your team to own and extend the suite independently.' },
      ],
    },
    tools: {
      title: 'Tools & technologies',
      items: ['Playwright', 'Cypress', 'Selenium Grid', 'Appium', 'Rest-Assured', 'Java', 'Gatling', 'k6', 'Grafana', 'GitHub Actions', 'Jenkins', 'Docker', 'AI Tools'],
    },
    cta: {
      headline: 'Ready to get started with Automation Testing?',
      buttonLabel: 'Talk to an expert',
    },
    relatedIds: ['qa-testing', 'software-development'],
  },

  'software-development': {
    id: 'software-development',
    slug: '/services/software-development',
    name: 'Software Development',
    icon: 'Code2',
    shortDescription:
      'End-to-end product delivery from architecture to deployment — with quality built in from day one.',
    hero: {
      title: 'Software Development',
      subtitle:
        'We build production-ready software — designed for scale, tested for reliability, and delivered on time.',
      cta: { label: 'Talk to an expert', href: '/contact' },
    },
    problem: {
      title: 'The challenge',
      body: 'Many development engagements start well and finish poorly — rushed delivery, mounting technical debt, and inadequate testing. Teams end up maintaining fragile systems instead of building new features. The root cause is almost always the same: quality was treated as a separate concern rather than an integral part of the build.',
    },
    solution: {
      title: 'How we help',
      body: 'We bring a full software development capability with QA baked in from the first sprint. Our engineers write code that is readable, testable, and maintainable — and our QA specialists validate each increment before it moves forward. You get software that works correctly, not just code that compiles.',
      outcomes: [
        'Production-ready software delivered with automated test coverage',
        'Technical debt managed proactively through code review and refactoring sprints',
        'Transparent sprint-by-sprint progress with demo-ready increments',
      ],
    },
    process: {
      title: 'How we work',
      steps: [
        { number: 1, title: 'Discovery', description: 'We clarify requirements, define success criteria, and assess technical constraints before writing a single line of code.' },
        { number: 2, title: 'Architecture', description: 'We design the system architecture, choose the right technology stack, and set up the development environment.' },
        { number: 3, title: 'Sprints', description: 'We develop in short, predictable sprints with daily communication and demo-ready increments at every milestone.' },
        { number: 4, title: 'Built-in QA', description: 'Every feature is tested before it closes — unit, integration, and acceptance tests included by default, not as an afterthought.' },
        { number: 5, title: 'Deployment & support', description: 'We handle deployment, set up monitoring, and provide a structured handover or ongoing support retainer.' },
      ],
    },
    tools: {
      title: 'Tools & technologies',
      items: ['React', 'Next.js', 'Node.js', 'Java', 'Spring', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'GitHub Actions', 'AI Tools'],
    },
    cta: {
      headline: 'Ready to get started with Software Development?',
      buttonLabel: 'Talk to an expert',
    },
    relatedIds: ['qa-testing', 'outsourcing'],
  },

  'outsourcing': {
    id: 'outsourcing',
    slug: '/services/outsourcing',
    name: 'Outsourcing',
    icon: 'Users',
    shortDescription:
      'Flexible, NDA-ready engineering teams that integrate with your workflow within days.',
    hero: {
      title: 'Outsourcing',
      subtitle:
        'Scale your engineering capacity on demand — pre-vetted specialists, fast onboarding, flexible contracts.',
      cta: { label: 'Talk to an expert', href: '/contact' },
    },
    problem: {
      title: 'The challenge',
      body: 'Hiring senior engineers takes months. In the meantime, backlogs grow, releases slip, and existing team members burn out covering gaps. Traditional outsourcing often makes it worse — misaligned skills, slow ramp-up, and cultural friction that costs more to manage than it saves.',
    },
    solution: {
      title: 'How we help',
      body: 'We provide pre-vetted QA engineers, automation specialists, and developers who integrate into your existing team and workflow. We match skills to your specific stack, handle contracting and compliance, and take responsibility for delivery quality — not just time and materials.',
      outcomes: [
        'Engineering capacity live within 1–2 weeks',
        'Engineers matched to your specific stack and methodology',
        'NDA-ready engagement with clear IP ownership from day one',
      ],
    },
    process: {
      title: 'How we work',
      steps: [
        { number: 1, title: 'Requirements', description: 'We clarify the role, skills, timezone preferences, and engagement model (part-time, full-time, project-based).' },
        { number: 2, title: 'Candidate matching', description: 'We present 2–3 pre-vetted candidates from our network within 5 business days, with CVs and skill assessments.' },
        { number: 3, title: 'Onboarding', description: 'Selected engineers integrate into your tools, processes, and team culture with a structured onboarding plan.' },
        { number: 4, title: 'Delivery', description: 'Engineers work within your sprint cadence. We provide monthly check-ins to ensure quality and alignment.' },
        { number: 5, title: 'Review & extend', description: 'We review engagement performance monthly and flex headcount as your needs evolve.' },
      ],
    },
    tools: {
      title: 'Flexible stack',
      items: ['Stack matched to client needs', 'NDA-ready from day one', 'GDPR-compliant contracts', 'EU timezone coverage', 'Agile / Scrum / Kanban', 'Your existing toolchain', 'IP ownership clarity', 'Flexible contracts'],
    },
    cta: {
      headline: 'Ready to get started with Outsourcing?',
      buttonLabel: 'Talk to an expert',
    },
    relatedIds: ['qa-testing', 'software-development'],
  },
}

export const serviceList = Object.values(services)
