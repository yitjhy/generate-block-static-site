import { DatePicker, TimePicker } from 'antd'

import type { Moment } from 'moment'
import moment from 'moment'

import { firstCheckError, isHidden } from './checks'
import type { A2UIInjectedProps } from './types'

interface DateTimeInputProps extends A2UIInjectedProps {
  enableDate?: boolean
  enableTime?: boolean
  fieldPath?: string
  label?: unknown
  value?: unknown
}

export default function DateTimeInput({
  accessibility,
  checks,
  enableDate = false,
  enableTime = false,
  fieldPath,
  label,
  value,
  onDataChange,
}: DateTimeInputProps) {
  if (isHidden(accessibility)) return null

  const text = value == null ? '' : String(value)
  const parsed = text ? moment(text) : null
  const error = firstCheckError(checks)

  const handleChange = (next: Moment | null) => {
    if (fieldPath) onDataChange?.(fieldPath, next ? next.toISOString() : '')
  }

  let picker: JSX.Element
  if (enableDate && enableTime) {
    picker = <DatePicker showTime value={parsed} onChange={handleChange} />
  } else if (enableDate) {
    picker = <DatePicker value={parsed} onChange={handleChange} />
  } else {
    picker = <TimePicker value={parsed} onChange={handleChange} />
  }

  return (
    <div className="flex flex-col gap-[4px]">
      {label != null && <span className="text-[12px] text-[rgba(0,0,0,0.45)]">{String(label)}</span>}
      {picker}
      {error && <span className="text-[12px] text-[#ff4d4f]">{error}</span>}
    </div>
  )
}
