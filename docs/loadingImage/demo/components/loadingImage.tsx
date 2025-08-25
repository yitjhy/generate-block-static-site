import { useEffect, FC, useState, ReactNode, CSSProperties } from 'react'
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
    <div
      className="w-[260px] h-[260px] bg-no-repeat bg-top bg-cover shadow-[0_4px_4px_rgba(0,0,0,0.1)] rounded-[14px] flex flex-col justify-between"
      style={{ ...(props?.style || {}), backgroundImage: `url(${src})` }}
    >
      {!isFlag && (
        <div className="w-full h-full flex items-center justify-center text-[25px]">
          <LoadingOutlined />
        </div>
      )}
      {props.children}
    </div>
  )
}
export default LoadingImage
