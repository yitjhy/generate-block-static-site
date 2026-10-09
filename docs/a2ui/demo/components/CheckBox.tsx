import { Checkbox } from 'antd'

import { isHidden } from './checks'
import type { A2UIInjectedProps } from './types'

interface CheckBoxProps extends A2UIInjectedProps {
  fieldPath?: string
  label?: unknown
  value?: unknown
}

export default function CheckBox({ accessibility, fieldPath, label, value, onDataChange }: CheckBoxProps) {
  if (isHidden(accessibility)) return null

  return (
    <Checkbox
      checked={Boolean(value)}
      onChange={(event) => {
        if (fieldPath) onDataChange?.(fieldPath, event.target.checked)
      }}
    >
      {label == null ? '' : String(label)}
    </Checkbox>
  )
}
