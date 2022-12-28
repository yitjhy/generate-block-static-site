import { CSSProperties, useEffect, useRef } from 'react'
import styled from 'styled-components'

export enum Sort {
  DEFAULT,
  DESC,
  ASC,
}
export default function Sortable(props: {
  value: Sort
  onChange: (sort: Sort) => void
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current?.parentElement
    if (el) {
      const clickHandler = () => {
        props.onChange(props.value === Sort.DEFAULT ? Sort.DESC : props.value === Sort.DESC ? Sort.ASC : Sort.DEFAULT)
      }
      el.addEventListener('click', clickHandler)
      return () => {
        el.removeEventListener('click', clickHandler)
      }
    }
  }, [props.value])
  return (
    <SortableWrapper ref={ref} className={props.className} style={props.style}>
      <Triangle src={props.value === Sort.ASC ? 'Images.TABLE.UP_ACTIVE_SVG' : 'Images.TABLE.UP_SVG'} />
      <Triangle src={props.value === Sort.DESC ? 'Images.TABLE.DOWN_ACTIVE_SVG' : 'Images.TABLE.DOWN_SVG'} />
    </SortableWrapper>
  )
}

const SortableWrapper = styled.span`
  height: 14px;
  width: 7px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-left: 4px;
`

const Triangle = styled.img`
  width: 7px;
  height: 7px;
`
