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
      <div className="triggerWrapper">{children || <DefaultTriggerNode />}</div>
      <div className="contentWrapper">
        <div className="menuWrapper">
          {menu.map((item) => {
            return (
              <div className="menuItem" key={item.key}>
                {item.label}
              </div>
            )
          })}
        </div>
      </div>
    </DropdownWrapper>
  )
}

const DefaultTriggerWrapper = styled.div`
  font-size: 0;
  margin-left: 10px;
`

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  &:hover > div:nth-child(2) {
    opacity: 1;
    transform: scale(1);
  }
  .contentWrapper {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 2;
    transform-origin: 0 0;
    transition: all cubic-bezier(0.39, 0.58, 0.57, 1) 0.2s;
    transform: scale(0);
    opacity: 0;
    width: max-content;
    .menuWrapper {
      margin-top: 5px;
      background: #fff;
      box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%);
      border-radius: 8px;
    }
  }
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
export const MenuItemText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-transform: capitalize;
  color: #252525;
`
export default Dropdown
