import { createContext, useContext } from 'react'

// 定义 GroupItem Context 的类型
interface GroupItemContextType {
  uuID: string
  isEnable: boolean
  isActive: boolean
  setIsEnable: (isEnable: boolean) => void
  isDisableSwitch: boolean
  setIsDisableSwitch: (isDisableSwitch: boolean) => void
  fieldName?: string // 对应的表单字段名，如 'triggerRule', 'autoStatusRule'
}

// 创建 Context
const GroupItemContext = createContext<GroupItemContextType | undefined>(undefined)

// 自定义 Hook，用于在 Header 和 Body 中访问 uuID
export const useGroupItem = () => {
  const context = useContext(GroupItemContext)

  if (context === undefined) {
    throw new Error('useGroupItem must be used within a GroupItem component')
  }

  return context
}

export default GroupItemContext
