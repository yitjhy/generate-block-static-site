import React, { FC } from 'react'
import styled from 'styled-components'

export interface DropdownProps {
  menu: { key: string | number; label: React.ReactNode }[]
  children?: React.ReactNode | string
  style?: React.CSSProperties
}

const DefaultTriggerNode = () => <DefaultTriggerWrapper>Hover me</DefaultTriggerWrapper>

const Dropdown: FC<DropdownProps> = ({ children, menu = [], style }) => {
  return (
    <DropdownWrapper style={style}>
      <TriggerWrapper>{children || <DefaultTriggerNode />}</TriggerWrapper>
      <MenuWrapper>
        {menu.map((item) => {
          return <div key={item.key}>{item.label}</div>
        })}
      </MenuWrapper>
    </DropdownWrapper>
  )
}

const DefaultTriggerWrapper = styled.div`
  font-size: 0;
  margin-left: 10px;
`
const TriggerWrapper = styled.div``

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  &:hover > div:nth-child(2) {
    opacity: 1;
    transform: scale(1);
  }
`

const MenuWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  z-index: 10;
  top: 100%;
  left: 10px;
  opacity: 0;
  transition: all ease-in 0.2s;
  padding: 6px 0 0 0;
  transform-origin: 0 0;
  transform: scale(0);
  background: #fff;
  box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%);
  border-radius: 8px;
`
export const MenuItemWrapper = styled.div`
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all linear 0.2s;
  padding: 8px 11px 8px 9px;
  &:hover {
    background: #73d37b;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`

export const MenuItemIcon = styled.img`
  max-width: 12px;
  max-height: 12px;
  margin-right: 7px;
`

export const MenuItemText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-transform: capitalize;
  color: #252525;
`

export default Dropdown
