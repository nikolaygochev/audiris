import { serviceList } from '@/lib/services'

export function TestRunPanel() {
  return (
    <div className="rounded border border-rule/20 bg-ink p-5 font-mono text-sm leading-relaxed">
      <p className="text-rule/60">$ audiris verify --services</p>
      <ul className="mt-3 space-y-1.5">
        {serviceList.map((s, i) => (
          <li
            key={s.id}
            className="flex items-center gap-2 text-rule opacity-0 animate-tick"
            style={{ animationDelay: `${0.3 + i * 0.25}s` }}
          >
            <span className="text-verify-200" aria-hidden="true">✓</span>
            {s.name}
          </li>
        ))}
      </ul>
      <p
        className="mt-3 pt-3 border-t border-rule/10 text-paper opacity-0 animate-tick"
        style={{ animationDelay: `${0.3 + serviceList.length * 0.25}s` }}
      >
        {serviceList.length}/{serviceList.length} service lines verified
      </p>
    </div>
  )
}
