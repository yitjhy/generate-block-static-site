import { FC, useState, useEffect } from 'react'
import { v4 as UUID } from 'uuid'
import GroupItemContext from './GroupItemContext'
import Header from './Header'
import Body from './Body'
import { useGroup } from './GroupContext'

const GroupItem: FC<{
  header: React.ReactNode
  body: React.ReactNode
  fieldName?: string // 对应的表单字段名
}> & { Header: typeof Header; Body: typeof Body } = ({ header, body, fieldName }) => {
  const [uuID, setUUID] = useState<string>('')
  const [isEnable, setIsEnable] = useState<boolean>(false)
  const [isDisableSwitch, setIsDisableSwitch] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const { selectedGroupItem, registerGroupItem, unregisterGroupItem, initValues } = useGroup()
  useEffect(() => {
    const uuid = UUID()
    setUUID(uuid)
  }, [])
  useEffect(() => {
    if (initValues && fieldName) {
      setIsEnable(!!initValues[fieldName]?.enable)
    }
  }, [initValues, fieldName])

  // 注册当前 GroupItem 到 GroupContext
  useEffect(() => {
    if (uuID && fieldName) {
      registerGroupItem(uuID, fieldName, () => isEnable)
      return () => {
        unregisterGroupItem(uuID)
      }
    }
  }, [uuID, fieldName, registerGroupItem, unregisterGroupItem, isEnable])

  useEffect(() => {
    setIsActive(!!selectedGroupItem && selectedGroupItem === uuID)
  }, [selectedGroupItem])

  return (
    <GroupItemContext.Provider
      value={{ uuID, isEnable, setIsEnable, isDisableSwitch, setIsDisableSwitch, isActive, fieldName }}
    >
      <div>
        <div className="pr-[24px] bg-white rounded-[8px] mt-[12px]">
          {header}
          <div
            className={`bg-[#F6F7F8] py-[16px] pl-[22px] pr-[24px] rounded-[8px] ml-[14px] mt-[8px] ${
              isEnable || isDisableSwitch ? 'block' : 'hidden'
            }`}
          >
            {body}
          </div>
        </div>
      </div>
    </GroupItemContext.Provider>
  )
}

GroupItem.Header = Header
GroupItem.Body = Body

export default GroupItem
