import { Slider as AntSlider } from 'antd'

import { firstCheckError, isHidden } from './checks'
import type { A2UIInjectedProps } from './types'

interface SliderProps extends A2UIInjectedProps {
  fieldPath?: string
  label?: unknown
  max?: number
  min?: number
  value?: unknown
}

export default function Slider({
  accessibility,
  checks,
  fieldPath,
  label,
  max = 100,
  min = 0,
  value,
  onDataChange,
}: SliderProps) {
  if (isHidden(accessibility)) return null

  const error = firstCheckError(checks)

  return (
    <div className="flex flex-col gap-[4px]">
      {label != null && <span className="text-[12px] text-[rgba(0,0,0,0.45)]">{String(label)}</span>}
      <AntSlider
        max={max}
        min={min}
        value={value == null ? min : Number(value)}
        onChange={(next) => {
          if (fieldPath) onDataChange?.(fieldPath, next)
        }}
      />
      {error && <span className="text-[12px] text-[#ff4d4f]">{error}</span>}
    </div>
  )
}
