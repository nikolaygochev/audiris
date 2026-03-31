import type { Metadata } from 'next'
import { ServicePage }   from '@/components/services/ServicePage'
import { services }      from '@/lib/services'
import { buildMetadata } from '@/lib/metadata'

const service = services['software-development']

export const metadata: Metadata = buildMetadata({
  title: 'Software Development Services',
  description: 'End-to-end software development from Audiris — architecture, delivery, and built-in QA for teams that need production-ready software on time.',
  path: service.slug,
})

export default function SoftwareDevelopmentPage() {
  return <ServicePage service={service} />
}
