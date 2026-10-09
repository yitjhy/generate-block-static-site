import type { ReactNode } from 'react'

import { isHidden } from './checks'

interface ListProps {
  accessibility?: unknown
  align?: string
  children?: ReactNode
  direction?: string
}

const ALIGN_CLASS: Record<string, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
}

export default function List({ accessibility, align = 'stretch', children, direction = 'vertical' }: ListProps) {
  if (isHidden(accessibility)) return null
  return (
    <div className={`flex gap-[8px] ${direction === 'vertical' ? 'flex-col' : 'flex-row'} ${ALIGN_CLASS[align]}`}>
      {children}
    </div>
  )
}
