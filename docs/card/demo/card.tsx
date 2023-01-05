import React, { FC } from 'react'
import styled from 'styled-components'

type CardTemplateProps = {
  background?: string
  header: React.ReactNode
  bottom: React.ReactNode
}
const defaultBackground = 'linear-gradient(170.12deg, #6b95f5 -3.26%, #2cd6d6 45.41%, #47b8f1 96.76%)'
const CardTemplate: FC<CardTemplateProps> = ({ background = defaultBackground, header, bottom }) => {
  return (
    <CardWrapper background={background}>
      <div className="cardHeaderWrapper">{header}</div>
      <div className="cardBottomWrapper">{bottom}</div>
    </CardWrapper>
  )
}

const CardWrapper = styled.div<{ background: string }>`
  width: 206px;
  height: 225px;
  background: ${({ background }) => background};
  box-shadow: 0 4px 10px rgba(39, 39, 39, 0.15);
  border-radius: 14px;
  padding-top: 13px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: all linear 0.2s;
  :hover {
    transform: translateY(-2px);
  }
  &:hover {
    box-shadow: 0 4px 15px rgba(94, 212, 151, 0.25);
  }
`

export default CardTemplate
