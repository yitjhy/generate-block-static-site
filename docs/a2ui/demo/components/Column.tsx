import type { ReactNode } from 'react'

import { isHidden } from './checks'

interface ColumnProps {
  accessibility?: unknown
  children?: ReactNode
}

export default function Column({ accessibility, children }: ColumnProps) {
  if (isHidden(accessibility)) return null
  return <div className="flex flex-col gap-[12px]">{children}</div>
}
