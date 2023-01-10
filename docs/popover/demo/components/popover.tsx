import styled from 'styled-components'
import { FC, ReactNode } from 'react'

export interface PopoverProps {
  content: ReactNode
  children: ReactNode
}

const Popover: FC<PopoverProps> = ({ content, children }) => {
  return (
    <PopoverWrapper>
      <TriggerWrapper>{children}</TriggerWrapper>
      <ContentWrapper>
        <Content>{content}</Content>
      </ContentWrapper>
    </PopoverWrapper>
  )
}

const TriggerWrapper = styled.div`
  display: flex;
  align-items: center;
`

const PopoverWrapper = styled.div`
  position: relative;
  &:hover > div:nth-child(2) {
    opacity: 1;
    transform: scale(1);
  }
`
const ContentWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 2;
  transform-origin: 0 0;
  transition: all cubic-bezier(0.39, 0.58, 0.57, 1) 0.2s;
  transform: scale(0);
  opacity: 0;
`
const Content = styled.div`
  position: relative;
  margin-top: 9px;
  padding: 13px 23px 13px 15px;
  background: #fff;
  box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%);
  border-radius: 8px;
  &:after {
    content: '';
    position: absolute;
    z-index: 2;
    left: 14px;
    top: 0;
    width: 13px;
    height: 13px;
    background: #fff;
    border-radius: 2px;
    transform: rotate(45deg) translateY(-50%);
  }
`
export default Popover
