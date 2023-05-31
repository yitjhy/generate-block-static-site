import styled from 'styled-components'
import React, { useState, FC } from 'react'
import Header from './Header'

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
}) => {
  const [isExpand, setIsExpand] = useState(true)
  const handleClickHeader = () => {
    isForceExpand && setIsExpand(!isExpand)
    onClick && onClick()
  }
  if (!children) {
    return <Header title={title} showOperation={showOperation} onClick={handleClickHeader} operation={operation} />
  }
  return (
    <div style={{ minHeight: 0 }}>
      <Header title={title} showOperation={showOperation} onClick={handleClickHeader} operation={operation} />
      <ContentWrapper isExpand={isExpand}>
        <div>{children}</div>
      </ContentWrapper>
    </div>
  )
}

const ContentWrapper = styled.div<{ isExpand: boolean }>`
  overflow: hidden;
  padding-top: 16px;
  transition: all cubic-bezier(0.39, 0.58, 0.57, 1) 0.2s;
  opacity: ${({ isExpand }) => (isExpand ? 1 : 0)};
  transform-origin: 50% 0;
  transform: ${({ isExpand }) => (isExpand ? 'scaleY(1)' : 'scaleY(0)')};
  display: grid;
  grid-template-rows: ${({ isExpand }) => (isExpand ? '1fr' : '0fr')};
  & > * {
    min-height: 0;
  }
`

export default Collapse
