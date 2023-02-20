import styled from 'styled-components'
import React, { useState, useEffect, FC, memo } from 'react'

export interface TabsItemProps {
  key: React.Key
  label: React.ReactNode | string
  children: React.ReactNode | string
}

export type tabsHeaderProps = Omit<TabsItemProps, 'children'>

interface TabsProps {
  items: TabsItemProps[]
  defaultTab?: string | number
  onChange?: (val: tabsHeaderProps) => void
}

const Tabs: FC<TabsProps> = ({ items, onChange, defaultTab }) => {
  const [hadRenderTabPane, setHadRenderTabPane] = useState<(string | number)[]>(
    defaultTab ? [defaultTab] : [items[0].key]
  )
  const [checkedId, setCheckedId] = useState<string | number>(defaultTab || items[0].key)
  const [offsetLeft, setOffsetLeft] = useState(0)
  const [offsetWidth, setOffsetWidth] = useState(0)

  const tabsHeaderData: tabsHeaderProps[] = items.map((item) => {
    return { key: item.key, label: item.label }
  })

  const getDefaultActiveKey = () => {
    const activeKey = items[0]?.key
    setCheckedId(activeKey)
    return activeKey
  }

  const handleClick = (data: tabsHeaderProps, e: React.MouseEvent<HTMLDivElement>) => {
    setHadRenderTabPane([...hadRenderTabPane, data.key])
    setOffsetLeft((e.target as HTMLDivElement).offsetLeft)
    setOffsetWidth((e.target as HTMLDivElement).offsetWidth)
    setCheckedId(data.key)
    onChange && onChange(data)
  }

  useEffect(() => {
    !defaultTab && getDefaultActiveKey()
  }, [items])
  useEffect(() => {
    if (defaultTab) {
      setCheckedId(defaultTab)
      setHadRenderTabPane([...hadRenderTabPane, defaultTab])
    }
  }, [defaultTab])
  return (
    <>
      <TabsContentWrapper>
        <TabsWrapper>
          {tabsHeaderData.map((item) => {
            return (
              <TabsItem
                isChecked={item.key === checkedId}
                key={item.key}
                ref={(node) => {
                  if (checkedId === item.key) {
                    setTimeout(() => {
                      const offsetWidth = (node as HTMLDivElement)?.offsetWidth
                      const offsetLeft = (node as HTMLDivElement)?.offsetLeft
                      if (offsetWidth) {
                        setOffsetWidth(offsetWidth)
                        setOffsetLeft(offsetLeft)
                      }
                    }, 100)
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
        {hadRenderTabPane.length > 0 &&
          items.map((item) => {
            return (
              <>
                {hadRenderTabPane.includes(item.key) && (
                  <div key={item.key} style={{ display: item.key === checkedId ? 'block' : 'none' }}>
                    {item.children}
                  </div>
                )}
              </>
              // <div key={item.key} style={{ display: item.key === checkedId ? 'block' : 'none' }}>
              //   {item.children}
              // </div>
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
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;
  color: ${({ isChecked }) => (isChecked ? '#1677ff' : '#252525')};
  margin-right: 52px;
  cursor: pointer;
  transition: all linear 0.15s;
  user-select: none;
  padding: 0 8px;
  display: flex;
  align-items: center;
  &:hover {
    color: #1677ff;
  }
`

const Line = styled.div<{ left: number; width: number }>`
  width: 100%;
  height: 1px;
  background: #1677ff;
  position: relative;
  margin-top: 10px;
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

export default memo(Tabs)
