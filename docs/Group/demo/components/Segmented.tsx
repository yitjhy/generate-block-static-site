import React, { useEffect, useMemo, useState } from 'react'
import { Segmented } from 'antd'
import classNames from 'classnames'

// import './index.less';
const QSegmented: React.FC<
  PropsWithForm<
    string,
    {
      options: Array<{
        label: React.ReactNode
        value: string
        disabled?: boolean
        disabledSelect?: boolean
        extra?: React.ReactNode
        children?: React.ReactNode
      }>
      defaultValue?: string
      forceRender?: boolean
      className?: string
      full?: boolean
      bodyClassName?: string
      disabled?: boolean
    }
  >
> = (props) => {
  const [current, setCurrent] = useState(props.defaultValue || props.value || props.options[0]?.value)
  const options = useMemo(() => {
    if (!props.options) return []
    return props.options.map((item) => {
      return {
        label: item.label,
        value: item.value,
        disabled: item.disabled,
      }
    })
  }, [props.options])
  const currentOption = useMemo(() => {
    return props.options.find((item) => item.value === current)
  }, [props.options, current])
  useEffect(() => {
    if (typeof props.value === 'string') setCurrent(props.value)
  }, [props.value])
  return (
    <div className={classNames(props.className, 'quick-segmented', { 'h-full': props.full })}>
      <div className="flex items-center justify-between">
        <Segmented
          block
          className=" [&_label.ant-segmented-item]:color-[rgba(0,0,0,0.45)] [&_label.ant-segmented-item.ant-segmented-item-selected]:color-q-primary"
          disabled={props.disabled}
          options={options}
          value={current}
          onChange={(e) => {
            const item = props.options.find((v) => v.value === e)
            if (item?.disabledSelect) return
            setCurrent(`${e}`)
            props.onChange?.(`${e}`)
          }}
        />
        <div className="flex-1 flex justify-end">{currentOption?.extra}</div>
      </div>
      {props.forceRender ? (
        props.options.map((v) => {
          return (
            <div
              className={classNames({ hidden: v.value !== current }, props.bodyClassName, {
                'h-[calc(100%-60px)]': props.full,
              })}
            >
              {v.children}
            </div>
          )
        })
      ) : (
        <div className={classNames(props.bodyClassName, { 'h-[calc(100%-60px)]': props.full })}>
          {currentOption?.children}
        </div>
      )}
    </div>
  )
}

export default QSegmented
