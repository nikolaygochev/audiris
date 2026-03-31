interface ToolChipProps {
  name: string
}

export function ToolChip({ name }: ToolChipProps) {
  return (
    <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 transition-colors duration-200">
      {name}
    </div>
  )
}
