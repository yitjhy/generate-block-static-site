import { GroupContextProvider } from './GroupContext'
import GroupItem from './GroupItem'
import { useMemo } from 'react'

// 定义表单字段类型约束
type GroupFormFieldType = {
  data?: any
  enable?: boolean
}

type TGroup<T extends Record<string, GroupFormFieldType> = Record<string, GroupFormFieldType>> = {
  onSubmit: (values: T) => Promise<void> | void
  formValues: T
  items: {
    fieldName?: string // 可选，如果不传则自动从 formValues 推断
    header: {
      title: React.ReactNode
      description?: React.ReactNode
    }
    body: React.ReactNode
    isDisableSwitch?: boolean
    onEnableChange?: (enable: boolean) => void
  }[]
}

function Group<T extends Record<string, GroupFormFieldType>>({ onSubmit, formValues, items }: TGroup<T>) {
  // 自动从 formValues 中提取字段名
  const fieldNames = useMemo(() => {
    return formValues && typeof formValues === 'object' ? Object.keys(formValues) : []
  }, [formValues])

  return (
    <GroupContextProvider<T> onSubmit={onSubmit} initValues={formValues}>
      <div className="flex flex-col gap-y-[16px]">
        {items.map((item, index) => (
          <GroupItem
            key={index}
            fieldName={item.fieldName || fieldNames[index]} // 优先使用明确指定的，否则自动推断
            header={
              <GroupItem.Header
                isDisableSwitch={!!item?.isDisableSwitch}
                description={item?.header?.description}
                title={item?.header?.title}
                onEnableChange={item?.onEnableChange}
              />
            }
            body={<GroupItem.Body>{item.body}</GroupItem.Body>}
          />
        ))}
      </div>
    </GroupContextProvider>
  )
}

export default Group
