import type { Metadata } from 'next'
import { Hero }             from '@/components/home/Hero'
import { SocialProof }      from '@/components/home/SocialProof'
import { ServicesOverview } from '@/components/home/ServicesOverview'
import { WhyAudiris }       from '@/components/home/WhyAudiris'
import { OriginStory }      from '@/components/home/OriginStory'
import { HomeCTA }          from '@/components/home/HomeCTA'
import { buildMetadata }    from '@/lib/metadata'
import { site }             from '@/lib/content'

export const metadata: Metadata = buildMetadata({
  title: `${site.name} — Born in QA. Built for everything that comes after.`,
  description: site.description,
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ServicesOverview />
      <WhyAudiris />
      <OriginStory />
      <HomeCTA />
    </>
  )
}
