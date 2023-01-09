import { useEffect, FC, useState, ReactNode, CSSProperties } from 'react'
import styled from 'styled-components'
import { LoadingOutlined } from '@ant-design/icons'

type TLoadingImageProps = {
  src: string
  style?: CSSProperties
  errorImg?: string
  children?: ReactNode
}
const defaultErrorImg =
  'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=826&t=st=1673252592~exp=1673253192~hmac=86553ee3acf8c0d791425690e0d0489f5af81a25d09a17aee5b15539bd53d9fb'
const LoadingImage: FC<TLoadingImageProps> = (props) => {
  const [src, setSrc] = useState('')
  const [isFlag, setIsFlag] = useState(false)
  const loadImg = () => {
    if (isFlag) return
    const imgDom = new Image()
    imgDom.src = props.src
    imgDom.onload = function () {
      setIsFlag(true)
      setSrc(props.src)
    }
    imgDom.onerror = function () {
      setIsFlag(true)
      setSrc((props.errorImg as string) || defaultErrorImg)
    }
  }
  useEffect(() => {
    loadImg()
  }, [props.src])
  return (
    <ImageWrapper background={src} style={props.style}>
      {!isFlag && (
        <div className="loaderWrapper">
          <LoadingOutlined />
        </div>
      )}
      {props.children}
    </ImageWrapper>
  )
}
const ImageWrapper = styled.div<{ background: string }>`
  width: 260px;
  height: 260px;
  background: ${({ background }) => `url(${background}) no-repeat top / cover`};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .loaderWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
  }
`
export default LoadingImage
