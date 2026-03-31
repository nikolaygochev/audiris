import type { Metadata } from 'next'
import { ServicePage }   from '@/components/services/ServicePage'
import { services }      from '@/lib/services'
import { buildMetadata } from '@/lib/metadata'

const service = services['outsourcing']

export const metadata: Metadata = buildMetadata({
  title: 'Engineering Outsourcing Services',
  description: 'Flexible, NDA-ready engineering outsourcing from Audiris — pre-vetted QA engineers and developers who integrate with your team within days.',
  path: service.slug,
})

export default function OutsourcingPage() {
  return <ServicePage service={service} />
}
