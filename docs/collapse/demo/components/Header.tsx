import styled from 'styled-components'
import React, { useState, memo, FC } from 'react'

interface HeaderProps {
  title: string
  showOperation: boolean
  onClick?: Function
  className?: string
  operation?: React.ReactNode | string
}

const DefaultOperation: FC<{ isExpand: boolean }> = ({ isExpand }) => (
  <HeaderArrowIcon
    src="https://img0.baidu.com/it/u=2212421746,3429509295&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
    isExpand={isExpand}
  />
)

const Header: FC<HeaderProps> = ({ title, onClick, showOperation = true, className, operation }) => {
  const [isExpand, setIsExpand] = useState<boolean>(false)
  const handleClickHeader = () => {
    setIsExpand(!isExpand)
    onClick && onClick()
  }
  return (
    <>
      <HeaderWrapper onClick={handleClickHeader} showOperation={showOperation} className={className}>
        <HeaderTitle>{title || 'others'}</HeaderTitle>
        {showOperation && (operation || <DefaultOperation isExpand={isExpand} />)}
      </HeaderWrapper>
    </>
  )
}

const HeaderWrapper = styled.div<{ showOperation: boolean }>`
  width: 100%;
  height: 50px;
  background: #fafafa;
  border-radius: 8px;
  padding: 13px 19px 13px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d9d9d9;
  cursor: ${({ showOperation }) => (showOperation ? 'pointer' : 'normal')};
`

const HeaderTitle = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: #252525;
`

const HeaderArrowIcon = styled.img<{ isExpand: boolean }>`
  max-width: 14px;
  max-height: 12px;
  transition: all linear 0.2s;
  user-select: none;
  transform: ${({ isExpand }) => (isExpand ? 'rotate(180deg)' : 'rotate(0deg)')};
`

export default memo(Header)
