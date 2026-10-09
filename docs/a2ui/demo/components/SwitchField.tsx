import { Switch } from 'antd'

import { isHidden } from './checks'
import type { A2UIInjectedProps } from './types'

interface SwitchFieldProps extends A2UIInjectedProps {
  fieldPath?: string
  label?: unknown
  value?: unknown
}

export default function SwitchField({ accessibility, fieldPath, label, value, onDataChange }: SwitchFieldProps) {
  if (isHidden(accessibility)) return null

  return (
    <div className="flex items-center gap-[8px]">
      <span className="text-[12px] text-[rgba(0,0,0,0.45)]">{label == null ? '' : String(label)}</span>
      <Switch
        checked={Boolean(value)}
        onChange={(checked) => {
          if (fieldPath) onDataChange?.(fieldPath, checked)
        }}
      />
    </div>
  )
}
