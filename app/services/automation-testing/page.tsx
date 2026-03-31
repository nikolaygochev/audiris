import type { Metadata } from 'next'
import { ServicePage }   from '@/components/services/ServicePage'
import { services }      from '@/lib/services'
import { buildMetadata } from '@/lib/metadata'

const service = services['automation-testing']

export const metadata: Metadata = buildMetadata({
  title: 'Automation Testing Services',
  description: 'Scalable test automation frameworks built by Audiris — Playwright, Cypress, CI/CD integration, and fast feedback loops for modern engineering teams.',
  path: service.slug,
})

export default function AutomationTestingPage() {
  return <ServicePage service={service} />
}
