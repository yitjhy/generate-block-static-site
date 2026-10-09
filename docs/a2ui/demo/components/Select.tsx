import { Select as AntSelect } from 'antd'

import { isHidden } from './checks'
import type { A2UIInjectedProps } from './types'

interface SelectOption {
  label?: unknown
  value?: string
}

interface SelectProps extends A2UIInjectedProps {
  fieldPath?: string
  label?: unknown
  multiple?: boolean
  options?: SelectOption[]
  placeholder?: string
  value?: unknown
}

const toList = (input: unknown): string[] => {
  if (Array.isArray(input)) return input.map(String)
  if (input == null || input === '') return []
  return [String(input)]
}

export default function Select({
  accessibility,
  fieldPath,
  label,
  multiple = false,
  options = [],
  placeholder,
  value,
  onDataChange,
}: SelectProps) {
  if (isHidden(accessibility)) return null

  const antdOptions = options.map((option) => ({
    label: option.label == null ? '' : String(option.label),
    value: option.value,
  }))
  const selected = toList(value)

  return (
    <div className="flex flex-col gap-[4px]">
      {label != null && <span className="text-[12px] text-[rgba(0,0,0,0.45)]">{String(label)}</span>}
      <AntSelect
        allowClear
        mode={multiple ? 'multiple' : undefined}
        options={antdOptions}
        placeholder={placeholder}
        value={multiple ? selected : selected[0]}
        onChange={(next) => {
          if (!fieldPath) return
          onDataChange?.(fieldPath, toList(next))
        }}
      />
    </div>
  )
}
