import { createContext, useContext, useState, ReactNode, useEffect, useRef, useCallback } from 'react'
import { FormInstance, Form } from 'antd'

// 定义表单字段类型约束
type GroupFormFieldType = {
  data?: any
  enable?: boolean
}

// 定义 Context 的泛型类型
interface GroupContextType<T extends Record<string, GroupFormFieldType> = Record<string, GroupFormFieldType>> {
  selectedGroupItem: string | null
  setSelectedGroupItem: (id: string | null) => void
  form: FormInstance<T>
  submit: () => Promise<void>
  registerGroupItem: (id: string, fieldName: string | undefined, getIsEnable: () => boolean) => void
  unregisterGroupItem: (id: string) => void
  initValues?: T
}

// 创建 Context
const GroupContext = createContext<GroupContextType<Record<string, GroupFormFieldType>> | undefined>(undefined)

// Provider 组件的 Props
interface GroupContextProviderProps<T extends Record<string, GroupFormFieldType> = Record<string, GroupFormFieldType>> {
  children: ReactNode
  onSubmit: (values: T) => Promise<void> | void
  initValues?: T
}

// Provider 组件 - 使用泛型函数组件
export function GroupContextProvider<T extends Record<string, GroupFormFieldType>>({
  children,
  onSubmit,
  initValues,
}: GroupContextProviderProps<T>) {
  const [selectedGroupItem, setSelectedGroupItem] = useState<string | null>(null)
  const [form] = Form.useForm<T>()

  // 存储所有 GroupItem 的信息
  const groupItemsRef = useRef<Map<string, { fieldName: string | undefined; getIsEnable: () => boolean }>>(new Map())

  useEffect(() => {
    if (initValues) {
      form.setFieldsValue(initValues as any)
    }
  }, [initValues])

  // 注册 GroupItem
  const registerGroupItem = useCallback((id: string, fieldName: string | undefined, getIsEnable: () => boolean) => {
    groupItemsRef.current.set(id, { fieldName, getIsEnable })
  }, [])

  // 注销 GroupItem
  const unregisterGroupItem = useCallback((id: string) => {
    groupItemsRef.current.delete(id)
  }, [])

  const submit = async () => {
    try {
      // 先验证表单
      const values = await form.validateFields()

      // 收集所有 GroupItem 的 enable 状态并合并到表单数据
      const mergedValues = { ...values } as any
      groupItemsRef.current.forEach(({ fieldName, getIsEnable }) => {
        if (fieldName && mergedValues[fieldName]) {
          mergedValues[fieldName] = {
            ...mergedValues[fieldName],
            enable: getIsEnable(),
          }
        }
      })

      // 调用用户提供的 onSubmit
      await onSubmit(mergedValues as T)
    } catch (error) {
      console.error('Form validation failed:', error)
    }
  }

  const value: GroupContextType<T> = {
    selectedGroupItem,
    setSelectedGroupItem,
    form,
    submit,
    registerGroupItem,
    unregisterGroupItem,
    initValues,
  }

  return (
    <GroupContext.Provider value={value as any}>
      <Form form={form}>{children}</Form>
    </GroupContext.Provider>
  )
}

// 自定义 Hook - 支持泛型，有默认类型
export function useGroup<T extends Record<string, GroupFormFieldType> = Record<string, GroupFormFieldType>>() {
  const context = useContext(GroupContext)

  if (context === undefined) {
    throw new Error('useGroup must be used within a GroupContextProvider')
  }

  return context as GroupContextType<T>
}
