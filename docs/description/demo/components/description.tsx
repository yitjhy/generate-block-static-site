import styled from 'styled-components'
import React from 'react'
import DescriptionItem from './descriptionItem'

interface DescriptionsProps {
  children: React.ReactNode
  column?: number
  style?: React.CSSProperties
  labelStyle?: React.CSSProperties
  contentStyle?: React.CSSProperties
}

interface DescriptionsContextProps {
  labelStyle?: React.CSSProperties
  contentStyle?: React.CSSProperties
}

const defaultColumn = 3
export const DescriptionsContext = React.createContext<DescriptionsContextProps>({})

function Description({ children, style, column = defaultColumn, labelStyle, contentStyle }: DescriptionsProps) {
  const contextValue = React.useMemo(() => ({ labelStyle, contentStyle }), [labelStyle, contentStyle])
  return (
    <DescriptionsContext.Provider value={contextValue}>
      <DescriptionWrapper style={style} column={column}>
        {children}
      </DescriptionWrapper>
    </DescriptionsContext.Provider>
  )
}

const DescriptionWrapper = styled.span<{ column: number }>`
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, auto)`};
  grid-gap: 13px 0;
`
Description.Item = DescriptionItem
export default Description
