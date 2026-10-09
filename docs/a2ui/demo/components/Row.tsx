import type { ReactNode } from 'react'

import { isHidden } from './checks'

interface RowProps {
  accessibility?: unknown
  children?: ReactNode
  justify?: string
}

export default function Row({ accessibility, children, justify = 'start' }: RowProps) {
  if (isHidden(accessibility)) return null
  return (
    <div
      className={`flex flex-row items-center gap-[8px] ${
        justify === 'spaceBetween' ? 'justify-between' : 'justify-start'
      }`}
    >
      {children}
    </div>
  )
}
