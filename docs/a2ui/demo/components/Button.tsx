import { Button as AntButton } from 'antd'

import { FUNCTIONS } from '../functions'

import { hasInvalidCheck, isHidden } from './checks'
import type { A2UIInjectedProps } from './types'

interface ButtonActionConfig {
  event?: { name?: string }
  functionCall?: { call?: string; args?: Record<string, unknown> }
}

interface ButtonProps extends A2UIInjectedProps {
  action?: ButtonActionConfig
  text?: unknown
  variant?: string
}

const BUTTON_TYPE: Record<string, 'primary' | 'default' | 'text'> = {
  primary: 'primary',
  borderless: 'text',
  default: 'default',
}

export default function Button({ accessibility, action, checks, text, variant = 'default', onAction }: ButtonProps) {
  if (isHidden(accessibility)) return null

  const disabled = hasInvalidCheck(checks)
  const type = BUTTON_TYPE[variant] ?? 'default'

  const handleClick = () => {
    if (action?.event?.name) {
      onAction?.(action.event.name, {})
      return
    }
    const { call, args } = action?.functionCall ?? {}
    const impl = call ? FUNCTIONS[call] : undefined
    if (impl) impl(args ?? {}, { rootModel: {}, scopeModel: {} })
  }

  return (
    <AntButton disabled={disabled} type={type} onClick={handleClick}>
      {text == null ? '' : String(text)}
    </AntButton>
  )
}
