import { serviceList, type ServiceId } from '@/lib/services'

const CX = 260
const CY = 260
const RADII = [58, 110, 165, 220]
const LABEL_ANGLES = [0, -20, -40, -60]
const RING_STROKE = ['stroke-iris-500', 'stroke-iris-500', 'stroke-iris-300', 'stroke-haze']
const RING_FILL   = ['fill-iris-500',   'fill-iris-500',   'fill-iris-300',   'fill-haze']

// Paints a field-coloured halo behind label text so it stays legible where it crosses outer rings.
const knockout = {
  paintOrder: 'stroke',
  stroke: '#F4F6F8',
  strokeWidth: 6,
  strokeLinejoin: 'round',
} as const

interface IrisDiagramProps {
  highlight?: ServiceId
  animate?: boolean
  className?: string
}

export function IrisDiagram({ highlight, animate = false, className = '' }: IrisDiagramProps) {
  const highlightIndex = highlight ? serviceList.findIndex(s => s.id === highlight) : -1
  const names = serviceList.map(s => s.name)

  const rings = serviceList.map((s, i) => {
    const angle = (LABEL_ANGLES[i] * Math.PI) / 180
    return {
      id: s.id,
      name: s.name,
      index: i,
      r: RADII[i],
      emphasized: highlightIndex === -1 || highlightIndex === i,
      isHighlight: highlightIndex === i,
      dotX: CX + RADII[i] * Math.cos(angle),
      dotY: CY + RADII[i] * Math.sin(angle),
      motion: { animationDelay: `${0.15 + i * 0.25}s`, transformOrigin: `${CX}px ${CY}px` },
    }
  })

  return (
    <div className={`overflow-hidden ${className}`}>
      {/* Below sm the labels are hidden, so widen the canvas (640/520) to centre the rings in the frame. */}
      <svg
        viewBox="0 0 640 520"
        className="w-full max-sm:w-[123%] max-sm:max-w-none h-auto"
        role="img"
        aria-label={`Concentric rings: ${names[0]} at the core, surrounded by ${names.slice(1).join(', ')}.`}
      >
        {/* Pass 1: rings. Pass 2: labels, so no outer ring is painted over an inner ring's label. */}
        {rings.map(ring => (
          <g key={ring.id} aria-hidden="true" className={animate ? 'animate-focus-pull' : ''} style={ring.motion}>
            {ring.index === 0 ? (
              <>
                <circle cx={CX} cy={CY} r={ring.r} className={ring.emphasized ? 'fill-iris-500' : 'fill-iris-100'} />
                <text
                  x={CX}
                  y={CY + 5}
                  textAnchor="middle"
                  className={`font-sans text-[15px] font-semibold ${ring.emphasized ? 'fill-field' : 'fill-iris-600'}`}
                >
                  {ring.name}
                </text>
              </>
            ) : (
              <circle
                cx={CX}
                cy={CY}
                r={ring.r}
                fill="none"
                strokeWidth={ring.isHighlight ? 6 : 2}
                className={ring.emphasized ? RING_STROKE[ring.index] : 'stroke-graphite/10'}
              />
            )}
          </g>
        ))}

        {rings.slice(1).map(ring => (
          <g key={`${ring.id}-label`} aria-hidden="true" className={animate ? 'animate-focus-pull' : ''} style={ring.motion}>
            <circle
              cx={ring.dotX}
              cy={ring.dotY}
              r={ring.isHighlight ? 7 : 5}
              className={ring.emphasized ? RING_FILL[ring.index] : 'fill-graphite/20'}
            />
            <text
              x={ring.dotX + 14}
              y={ring.dotY + 5}
              style={knockout}
              className={`max-sm:hidden font-sans text-[16px] ${
                ring.isHighlight ? 'font-semibold fill-graphite' : ring.emphasized ? 'font-medium fill-graphite' : 'fill-haze'
              }`}
            >
              {ring.name}
            </text>
          </g>
        ))}
      </svg>

      {/* On small screens the ring labels would be too small to read; list them instead. */}
      <ul className="sm:hidden mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        {serviceList.map((s, i) => {
          const emphasized = highlightIndex === -1 || highlightIndex === i
          return (
            <li key={s.id} className={`flex items-center gap-2 ${emphasized ? 'text-graphite' : 'text-haze'}`}>
              <RingMarker index={i} />
              {s.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function RingMarker({ index, className = '' }: { index: number; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={`h-6 w-6 flex-shrink-0 ${className}`} aria-hidden="true">
      <circle cx="32" cy="32" r="7" className={index === 0 ? 'fill-iris-500' : 'fill-graphite/15'} />
      {[14, 21, 28].map((r, j) => (
        <circle
          key={r}
          cx="32"
          cy="32"
          r={r}
          fill="none"
          strokeWidth={index === j + 1 ? 4 : 1.5}
          className={index === j + 1 ? 'stroke-iris-500' : 'stroke-graphite/15'}
        />
      ))}
    </svg>
  )
}
