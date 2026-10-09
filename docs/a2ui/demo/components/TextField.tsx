import { Input } from 'antd'

import { firstCheckError, isHidden } from './checks'
import type { A2UIInjectedProps } from './types'

interface TextFieldProps extends A2UIInjectedProps {
  fieldPath?: string
  label?: unknown
  placeholder?: string
  value?: unknown
  variant?: string
}

export default function TextField({
  accessibility,
  checks,
  fieldPath,
  label,
  placeholder,
  value,
  variant = 'shortText',
  onDataChange,
}: TextFieldProps) {
  if (isHidden(accessibility)) return null

  const text = value == null ? '' : String(value)
  const error = firstCheckError(checks)

  const inputProps = {
    placeholder,
    value: text,
    onChange: (event: { target: { value: string } }) => {
      if (fieldPath) onDataChange?.(fieldPath, event.target.value)
    },
  }

  return (
    <div className="flex flex-col gap-[4px]">
      {label != null && <span className="text-[12px] text-[rgba(0,0,0,0.45)]">{String(label)}</span>}
      {variant === 'longText' ? <Input.TextArea {...inputProps} /> : <Input {...inputProps} />}
      {error && <span className="text-[12px] text-[#ff4d4f]">{error}</span>}
    </div>
  )
}
