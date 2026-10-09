import Group from './components'
import UpdateStatusBody from './UpdateStatus/Body'
import DynamicTriggerRuleBody from './DynamicTriggerRule/Body'

export type TFormFields = {
  triggerRule: {
    enable: boolean
    data: any
  }
  autoStatusRule: {
    enable: boolean
    data: any
  }
}

const formValues: TFormFields = {
  triggerRule: {
    enable: true,
    data: [],
  },
  autoStatusRule: {
    enable: true,
    data: [],
  },
}

const Demo = () => {
  const handleSubmit = () => {
    console.log('submit')
  }

  return (
    <Group<TFormFields>
      onSubmit={handleSubmit}
      formValues={formValues}
      items={[
        {
          isDisableSwitch: true,
          header: {
            title: '工单触发器',
            description: '当触发预设的规则后，可以调用 Flow Bot，通过 Flow Bot 给客户发送邮件通知',
          },
          body: <DynamicTriggerRuleBody />,
        },
        {
          isDisableSwitch: false,
          header: {
            title: '更新状态',
            description: '当前设置',
          },
          body: <UpdateStatusBody />,
        },
      ]}
    />
  )
}

export default Demo
