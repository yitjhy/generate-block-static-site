import QSegmented from './Segmented'
import { FC, useEffect } from 'react'
import { Modal } from 'antd'
import { useGroupItem } from './GroupItemContext'
import { useGroup } from './GroupContext'

type THeader = {
  title: React.ReactNode
  description?: React.ReactNode
  isDisableSwitch?: boolean
  onEnableChange?: (enable: boolean) => void
}

const Header: FC<THeader> = ({ title, description, isDisableSwitch, onEnableChange }) => {
  const { setIsEnable, isEnable, setIsDisableSwitch } = useGroupItem()
  const { selectedGroupItem, submit } = useGroup()
  useEffect(() => {
    setIsDisableSwitch(!!isDisableSwitch)
  }, [isDisableSwitch])

  return (
    <div className="bg-white rounded-[8px]">
      <div className="flex items-center gap-x-[12px]">
        <div className="h-[12px] w-[2px] bg-[#FF6600]" />
        <div className="text-[#000000D9] text-[14px] font-500">
          <div>{title}</div>
        </div>
      </div>
      <div className="pl-[14px] mt-[8px]">
        <div className="flex justify-between items-end items-center">
          <div className="text-[#00000073] text-[12px] font-400">{description}</div>
          {!isDisableSwitch && (
            <div>
              <QSegmented
                full
                options={[
                  {
                    value: '0',
                    label: <div>关闭</div>,
                  },
                  {
                    value: '1',
                    label: <div>开启</div>,
                  },
                ]}
                value={isEnable ? '1' : '0'}
                onChange={(value) => {
                  const isEnable = value === '1'
                  setIsEnable(isEnable)
                  if (!isEnable) {
                    Modal.confirm({
                      width: 520,
                      title: '提示',
                      content: '确定关闭吗？',
                      onOk: () => {
                        onEnableChange?.(isEnable)
                        submit()
                      },
                      onCancel() {
                        setIsEnable(!isEnable)
                      },
                    })
                  } else {
                    onEnableChange?.(isEnable)
                    submit()
                  }
                }}
                disabled={!!selectedGroupItem}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
