import type { ReactNode } from 'react'

import { Card as AntCard } from 'antd'

import { isHidden } from './checks'

interface CardProps {
  accessibility?: unknown
  children?: ReactNode
}

export default function Card({ accessibility, children }: CardProps) {
  if (isHidden(accessibility)) return null
  return <AntCard size="small">{children}</AntCard>
}
