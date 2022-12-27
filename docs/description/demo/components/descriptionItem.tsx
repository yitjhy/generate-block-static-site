import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { DescriptionsContext } from './description'

type TDescriptionItemProps = {
  label: React.ReactNode
  children: React.ReactNode
  labelWidth?: number
  style?: React.CSSProperties
  labelStyle?: React.CSSProperties
  contentStyle?: React.CSSProperties
}
const DescriptionItem: FC<TDescriptionItemProps> = ({
  label,
  children,
  labelWidth,
  style,
  labelStyle,
  contentStyle,
}) => {
  const { labelStyle: labelStyleFromContext, contentStyle: contentStyleFromContext } = useContext(DescriptionsContext)
  return (
    <DescriptionItemWrapper style={style}>
      <DescriptionItemLabel
        style={{
          ...labelStyleFromContext,
          ...labelStyle,
          ...(labelWidth ? { width: labelWidth } : {}),
        }}
      >
        {label}
      </DescriptionItemLabel>
      <DescriptionItemContent style={{ ...contentStyleFromContext, ...contentStyle }}>
        {children}
      </DescriptionItemContent>
    </DescriptionItemWrapper>
  )
}

const DescriptionItemWrapper = styled.span`
  display: flex;
  align-items: center;
`
const DescriptionItemLabel = styled.span`
  font-size: 12px;
  color: #9f9f9f;
  text-transform: capitalize;
  &:after {
    content: ':';
    margin-left: 2px;
  }
`
const DescriptionItemContent = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #252525;
  margin-left: 8px;
`
export default DescriptionItem
