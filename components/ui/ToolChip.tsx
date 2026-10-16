interface ToolChipProps {
  name: string
}

export function ToolChip({ name }: ToolChipProps) {
  return (
    <div className="flex items-center justify-center rounded border border-rule bg-paper px-4 py-3 font-mono text-sm text-muted hover:border-ink hover:text-ink transition-colors duration-200">
      {name}
    </div>
  )
}
