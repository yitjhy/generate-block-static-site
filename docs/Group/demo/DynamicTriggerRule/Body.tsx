import Form2 from './Form'
import { FormInstance } from 'antd'
import { Form } from 'antd'
import { TFormFields } from '../demo'

interface BodyProps {
  isActive?: boolean
  form?: FormInstance<TFormFields>
}

const Body = ({ isActive, form }: BodyProps) => {
  const triggerRule = Form.useWatch(['triggerRule', 'data'], form)
  return (
    <div>
      <div className="flex gap-x-[12px] items-center">
        <div className="">触发规则</div>
      </div>
      <div className="ml-[21px] mt-[14px]">
        <div style={{ display: isActive ? 'block' : 'none' }}>
          <Form2 form={form} />
        </div>
        {!isActive && <div>当前工单已配置 {triggerRule?.length || 0}个 规则</div>}
      </div>
    </div>
  )
}
export default Body
