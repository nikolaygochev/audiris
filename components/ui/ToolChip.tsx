interface ToolChipProps {
  name: string
}

export function ToolChip({ name }: ToolChipProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-graphite/15 bg-white px-4 py-2 text-sm text-dim transition-colors duration-200 hover:border-iris-500 hover:text-iris-500">
      {name}
    </span>
  )
}
