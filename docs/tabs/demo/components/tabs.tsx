import styled from 'styled-components'
import React, { useState, useEffect, FC } from 'react'

export interface TabsItemProps {
  key: string | number
  label: React.ReactNode | string
  children: JSX.Element | string
}

export type tabsHeaderProps = Omit<TabsItemProps, 'children'>

interface TabsProps {
  items: TabsItemProps[]
  defaultTab?: string | number
  onChange?: (val: tabsHeaderProps) => void
}

const Tabs: FC<TabsProps> = ({ items, onChange, defaultTab }) => {
  const [checkedId, setCheckedId] = useState<string | number>()
  const [offsetLeft, setOffsetLeft] = useState(0)
  const [offsetWidth, setOffsetWidth] = useState(0)

  const tabsHeaderData: tabsHeaderProps[] = items.map((item) => {
    return {
      key: item.key,
      label: item.label,
    }
  })

  const getDefaultActiveKey = () => {
    const activeKey = items[0]?.key
    setCheckedId(activeKey)
    return activeKey
  }

  const handleClick = (data: tabsHeaderProps, e: React.MouseEvent<HTMLDivElement>) => {
    setOffsetLeft((e.target as HTMLDivElement).offsetLeft)
    setOffsetWidth((e.target as HTMLDivElement).offsetWidth)
    setCheckedId(data.key)
    onChange && onChange(data)
  }

  useEffect(() => {
    !defaultTab && getDefaultActiveKey()
  }, [items])
  useEffect(() => {
    if (defaultTab) setCheckedId(defaultTab)
  }, [defaultTab])
  return (
    <>
      <TabsContentWrapper>
        <TabsWrapper>
          {tabsHeaderData.map((item, index) => {
            return (
              <TabsItem
                isChecked={item.key === checkedId}
                key={item.key}
                ref={(node) => {
                  if (checkedId === item.key) {
                    const offsetWidth = (node as HTMLDivElement)?.offsetWidth
                    const offsetLeft = (node as HTMLDivElement)?.offsetLeft
                    if (offsetWidth) {
                      setOffsetWidth(offsetWidth)
                      setOffsetLeft(offsetLeft)
                    }
                  }
                }}
                onClick={(e) => {
                  handleClick(item, e)
                }}
              >
                {item.label}
              </TabsItem>
            )
          })}
        </TabsWrapper>
        <Line left={offsetLeft} width={offsetWidth} />
        {items.map((item) => {
          return (
            <div key={item.key} style={{ display: item.key === checkedId ? 'block' : 'none' }}>
              {item.children}
            </div>
          )
        })}
      </TabsContentWrapper>
    </>
  )
}

const TabsContentWrapper = styled.div`
  width: 100%;
`

const TabsWrapper = styled.div`
  display: flex;
  position: relative;
`

const TabsItem = styled.div<{ isChecked: boolean }>`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-transform: capitalize;
  color: ${({ isChecked }) => (isChecked ? '#1677ff' : '#252525')};
  text-shadow: 0 0 0.25px currentcolor;
  margin-right: 52px;
  cursor: pointer;
  transition: all linear 0.15s;
  user-select: none;
  padding: 0 8px;
  display: flex;
  align-items: center;
  &:hover {
    color: #73d37b;
  }
`

const Line = styled.div<{ left: number; width: number }>`
  width: 100%;
  height: 1px;
  background: #e2e2e2;
  position: relative;
  margin-top: 10px;
  margin-bottom: 16px;
  &::after {
    content: '';
    position: absolute;
    width: ${({ width }) => width + 'px'};
    height: 2px;
    background: #73d37b;
    left: ${({ left }) => left + 'px'};
    top: 0;
    transition: all linear 0.15s;
  }
`

export default Tabs
