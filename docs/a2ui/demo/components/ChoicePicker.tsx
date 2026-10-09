import { Checkbox, Radio, Space } from 'antd'

import { firstCheckError, isHidden } from './checks'
import type { A2UIInjectedProps } from './types'

interface ChoiceOption {
  label?: unknown
  value?: string
}

interface ChoicePickerProps extends A2UIInjectedProps {
  direction?: string
  fieldPath?: string
  label?: unknown
  options?: ChoiceOption[]
  value?: unknown
  variant?: string
}

export default function ChoicePicker({
  accessibility,
  checks,
  direction = 'horizontal',
  fieldPath,
  label,
  options = [],
  value,
  variant = 'mutuallyExclusive',
  onDataChange,
}: ChoicePickerProps) {
  if (isHidden(accessibility)) return null

  const selected = Array.isArray(value) ? (value as unknown[]).map(String) : []
  const error = firstCheckError(checks)
  const spaceDirection = direction === 'vertical' ? 'vertical' : 'horizontal'

  const handleChange = (next: string[]) => {
    if (fieldPath) onDataChange?.(fieldPath, next)
  }

  return (
    <div className="flex flex-col gap-[4px]">
      {label != null && label !== '' && <span className="text-[12px] text-[rgba(0,0,0,0.45)]">{String(label)}</span>}
      {variant === 'mutuallyExclusive' ? (
        <Radio.Group value={selected[0]} onChange={(event) => handleChange([event.target.value])}>
          <Space direction={spaceDirection}>
            {options.map((option) => (
              <Radio key={option.value} value={option.value}>
                {option.label == null ? '' : String(option.label)}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      ) : (
        <Checkbox.Group value={selected} onChange={(next) => handleChange(next as string[])}>
          <Space direction={spaceDirection}>
            {options.map((option) => (
              <Checkbox key={option.value} value={option.value}>
                {option.label == null ? '' : String(option.label)}
              </Checkbox>
            ))}
          </Space>
        </Checkbox.Group>
      )}
      {error && <span className="text-[12px] text-[#ff4d4f]">{error}</span>}
    </div>
  )
}
