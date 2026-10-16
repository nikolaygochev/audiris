import { socialProof } from '@/lib/content'

export function SocialProof() {
  return (
    <section className="bg-white border-y border-graphite/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 divide-x divide-graphite/10">
          {socialProof.stats.map(stat => (
            <div key={stat.label} className="py-8 px-4 sm:px-8 first:pl-0">
              <p className="font-display text-4xl sm:text-5xl font-semibold text-iris-500 tracking-tight">{stat.value}</p>
              <p className="mt-2 text-sm text-dim">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
