import { Mail, Linkedin, Clock } from 'lucide-react'
import { site } from '@/lib/content'

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <a
        href={`mailto:${site.email}`}
        className="flex items-center gap-4 group"
      >
        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-brand-300 transition-colors">
          <Mail className="w-5 h-5 text-brand-500" />
        </div>
        <div>
          <p className="text-xs text-slate-500 mb-0.5">Email us</p>
          <p className="text-slate-900 font-medium group-hover:text-brand-600 transition-colors">{site.email}</p>
        </div>
      </a>

      <a
        href={site.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 group"
      >
        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-brand-300 transition-colors">
          <Linkedin className="w-5 h-5 text-brand-500" />
        </div>
        <div>
          <p className="text-xs text-slate-500 mb-0.5">LinkedIn</p>
          <p className="text-slate-900 font-medium group-hover:text-brand-600 transition-colors">Audiris</p>
        </div>
      </a>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
          <Clock className="w-5 h-5 text-brand-500" />
        </div>
        <div>
          <p className="text-xs text-slate-500 mb-0.5">Response time</p>
          <p className="text-slate-900 font-medium">{site.responseTime}</p>
        </div>
      </div>
    </div>
  )
}
