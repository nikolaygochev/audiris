import type { Metadata } from 'next'
import { ServicePage } from '@/components/services/ServicePage'
import { services }    from '@/lib/services'
import { buildMetadata } from '@/lib/metadata'

const service = services['qa-testing']

export const metadata: Metadata = buildMetadata({
  title: 'QA & Testing Services',
  description: 'Expert QA and software testing services from Audiris — functional testing, test strategy, and defect management for teams that care about quality.',
  path: service.slug,
})

export default function QaTestingPage() {
  return <ServicePage service={service} />
}
