import { Button } from 'antd'
import { useGroup } from './GroupContext'
import { useGroupItem } from './GroupItemContext'
import { useState, cloneElement, isValidElement, ReactElement, Children } from 'react'
import { EditOutlined } from '@ant-design/icons'

interface BodyProps {
  children: React.ReactNode
}

const Body = ({ children }: BodyProps) => {
  const { uuID } = useGroupItem()
  const { setSelectedGroupItem, selectedGroupItem, submit, form, initValues } = useGroup()
  const { isActive } = useGroupItem()

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement, { isActive, form })
    }
    return child
  })

  const active = () => {
    setSelectedGroupItem(uuID)
  }
  const handleCancel = () => {
    // 恢复表单数据到初始值
    if (initValues) {
      form.setFieldsValue(initValues as any)
    }
    setSelectedGroupItem(null)
  }
  const [saveLoading, setSaveLoading] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const handleSave = async () => {
    try {
      setSaveLoading(true)
      await submit()
      setSaveLoading(false)
      setSelectedGroupItem(null)
    } catch (error) {
      setSaveLoading(false)
    }
  }

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {childrenWithProps}
      {selectedGroupItem === uuID && (
        <div className="mt-[16px] flex justify-end gap-x-[8px] gap-x-[16px]">
          <Button type="default" onClick={handleCancel}>
            取消
          </Button>
          <Button type="primary" onClick={handleSave} loading={saveLoading}>
            保存
          </Button>
        </div>
      )}
      {!selectedGroupItem && (
        <Button
          icon={<EditOutlined />}
          type="text"
          onClick={active}
          style={{
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s',
          }}
        />
      )}
    </div>
  )
}

export default Body
