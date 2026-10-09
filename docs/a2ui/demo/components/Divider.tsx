import { Divider as AntDivider } from 'antd'

import { isHidden } from './checks'

interface DividerProps {
  accessibility?: unknown
  axis?: string
}

export default function Divider({ accessibility, axis = 'horizontal' }: DividerProps) {
  if (isHidden(accessibility)) return null
  return <AntDivider type={axis === 'vertical' ? 'vertical' : 'horizontal'} />
}
