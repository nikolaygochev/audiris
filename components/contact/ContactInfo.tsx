import { Mail, Linkedin, Clock } from 'lucide-react'
import { site } from '@/lib/content'

const iconWrap = 'w-10 h-10 rounded-full border border-graphite/15 bg-white flex items-center justify-center flex-shrink-0 transition-colors'

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <a href={`mailto:${site.email}`} className="flex items-center gap-4 group">
        <div className={`${iconWrap} group-hover:border-iris-500`}>
          <Mail className="w-4 h-4 text-iris-500" />
        </div>
        <div>
          <p className="text-sm text-dim">Email us</p>
          <p className="text-graphite font-medium group-hover:text-iris-500 transition-colors">{site.email}</p>
        </div>
      </a>

      <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
        <div className={`${iconWrap} group-hover:border-iris-500`}>
          <Linkedin className="w-4 h-4 text-iris-500" />
        </div>
        <div>
          <p className="text-sm text-dim">LinkedIn</p>
          <p className="text-graphite font-medium group-hover:text-iris-500 transition-colors">Audiris</p>
        </div>
      </a>

      <div className="flex items-center gap-4">
        <div className={iconWrap}>
          <Clock className="w-4 h-4 text-iris-500" />
        </div>
        <div>
          <p className="text-sm text-dim">Response time</p>
          <p className="text-graphite font-medium">{site.responseTime}</p>
        </div>
      </div>
    </div>
  )
}
