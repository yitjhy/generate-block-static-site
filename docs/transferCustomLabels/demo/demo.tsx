import { useEffect, useRef } from 'react'
import useTransferCustomLabels from './hooks/useTransferCustomLabels'

const sourceNode = `哈哈, 这是一个自定义标签转标准标签例子 <dis>自定义dis标签, 内容优惠券一</dis>`
const Demo = () => {
  const { html, discountList } = useTransferCustomLabels(sourceNode)
  const ref = useRef<HTMLDivElement>(null)

  function onClickDiscountCopyIcon(this: HTMLDivElement, ev: { stopPropagation: () => void }) {
    ev.stopPropagation()
    window.navigator.clipboard.writeText(this.className).then(() => {
      alert(`复制 ${this.className} 成功`)
    })
  }

  useEffect(() => {
    if (discountList.length !== 0) {
      discountList.forEach((className) => {
        Array.from(ref.current!.getElementsByClassName(className)).forEach((item) => {
          item.addEventListener('click', onClickDiscountCopyIcon)
        })
      })
      return () => {
        discountList.forEach((className) => {
          Array.from(document.getElementsByClassName(className)).forEach((item) => {
            item.removeEventListener('click', onClickDiscountCopyIcon)
          })
        })
      }
    }
  }, [discountList])
  return (
    <div ref={ref}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default Demo
