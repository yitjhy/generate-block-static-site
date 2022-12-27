import styled from 'styled-components'
import React, { FC } from 'react'

export interface PopoverProps {
  content: React.ReactNode
  children: React.ReactNode
}

const Popover: FC<PopoverProps> = ({ content, children }) => {
  return (
    <PopoverWrapper>
      <TriggerWrapper>{children}</TriggerWrapper>
      <Content>{content}</Content>
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
    z-index: 3;
    transform: scale(1);
  }
`

const Content = styled.div`
  position: absolute;
  z-index: -1;
  white-space: nowrap;
  top: calc(100% + 13px);
  left: 10px;
  opacity: 0;
  transition: all ease-in 0.2s;
  padding: 13px 23px 13px 15px;
  background: #fff;
  box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%);
  border-radius: 8px;
  transform-origin: 0 0;
  transform: scale(0);
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
