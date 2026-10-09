import { Children } from 'react'
import type { ReactNode } from 'react'

import { Tabs as AntTabs } from 'antd'

import { isHidden } from './checks'
import type { A2UIInjectedProps } from './types'

interface TabsProps extends A2UIInjectedProps {
  children?: ReactNode
  titles?: unknown
}

export default function Tabs({ accessibility, children, titles = [] }: TabsProps) {
  if (isHidden(accessibility)) return null

  const titleList = Array.isArray(titles) ? titles : []
  const items = Children.toArray(children).map((node, index) => ({
    key: String(index),
    label: String(titleList[index] ?? ''),
    children: node,
  }))

  return <AntTabs items={items} />
}
