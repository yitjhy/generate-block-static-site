import { FC } from 'react'
import styled from 'styled-components'
import CardTemplate from './card'

const CardBottom = () => {
  return (
    <CardBottomWrapper>
      <span className="domainName">yitjhy.bnb</span>
      <div className="cardBottomWrapper">
        <DescriptionInfoWrapper>
          <span className="descriptionText">Owners</span>
          <span className="descriptionText">0x88cF...f5b5</span>
        </DescriptionInfoWrapper>
        <OtherDescriptionInfoWrapper>
          <span className="descriptionText">Expires</span>
          <span className="descriptionText">2023.11.30</span>
        </OtherDescriptionInfoWrapper>
      </div>
    </CardBottomWrapper>
  )
}

const Demo = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 206px)', gridGap: '15px 17px' }}>
      <CardTemplate
        header={<div style={{ marginLeft: '13px', fontSize: 25, color: '#fff' }}>Card</div>}
        bottom={<CardBottom />}
      />
      <CardTemplate
        header={<div style={{ marginLeft: '13px', fontSize: 25, color: '#fff' }}>Card</div>}
        bottom={<CardBottom />}
      />
      <CardTemplate
        header={<div style={{ marginLeft: '13px', fontSize: 25, color: '#fff' }}>Card</div>}
        bottom={<CardBottom />}
      />
    </div>
  )
}

const CardBottomWrapper = styled.div`
  .domainName {
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    color: #ffffff;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
    margin-left: 13px;
    margin-bottom: 7px;
  }
  .cardBottomWrapper {
    height: 82px;
    background: #f8f8f8;
    border-radius: 13px;
    padding: 17px 14px 16px 20px;
    margin-top: 7px;
  }
`
const DescriptionInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .descriptionText {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #9f9f9f;
  }
`
const OtherDescriptionInfoWrapper = styled(DescriptionInfoWrapper)`
  margin-top: 19px;
`
export default Demo
