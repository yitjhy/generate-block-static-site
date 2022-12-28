import styled from 'styled-components'
import React, { useState, useLayoutEffect, useRef } from 'react'
import Header from './Header'
import { FC } from 'react'
import { useSize } from 'ahooks'

type TCollapseProps = {
  title: string
  children: React.ReactNode | string
  operation?: React.ReactNode | string
  onClick?: () => void
  showOperation?: boolean
  isForceExpand?: boolean
  maxHeight?: number
}

const Collapse: FC<TCollapseProps> = ({
  title,
  children,
  onClick,
  operation,
  showOperation = true,
  isForceExpand = true,
  maxHeight = 350,
}) => {
  const ref = useRef(null)
  const [isExpand, setIsExpand] = useState(true)
  const [globalIsExpand, setGlobalIsExpand] = useState(true)
  const [offsetHeight, setOffsetHeight] = useState<number | undefined>()
  const size = useSize(ref)
  const handleClickHeader = () => {
    setGlobalIsExpand(false)
    isForceExpand && setIsExpand(!isExpand)
    onClick && onClick()
  }

  useLayoutEffect(() => {
    if (globalIsExpand && size) {
      setOffsetHeight(size?.height)
    }
  }, [size])
  if (!children) {
    return <Header title={title} showOperation={showOperation} onClick={handleClickHeader} operation={operation} />
  }
  return (
    <>
      <Header title={title} showOperation={showOperation} onClick={handleClickHeader} operation={operation} />
      <TableWrapper isExpand={isExpand} height={offsetHeight} maxHeight={maxHeight} ref={ref}>
        {children}
      </TableWrapper>
    </>
  )
}

const TableWrapper = styled.div<{ isExpand: boolean; height: number | undefined; maxHeight: number }>`
  max-height: ${({ maxHeight }) => `${maxHeight}px`};
  margin-top: 0;
  transition: all linear 0.2s;
  transform-origin: 50% 0;
  height: ${({ isExpand, height }) => (isExpand ? `${height}px` : 0)};
  opacity: ${({ isExpand }) => (isExpand ? 1 : 0)};
  overflow: ${({ height, maxHeight }) => (Number(height) < maxHeight ? 'hidden' : 'auto')};
  transform: ${({ isExpand }) => (isExpand ? 'scaleY(1)' : 'scaleY(0)')};
`

export default Collapse