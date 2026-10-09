import Form2 from './Form'
import { Form, FormInstance } from 'antd'
import { TFormFields } from '../demo'

interface BodyProps {
  isActive?: boolean
  form?: FormInstance<TFormFields>
}

const Body = ({ isActive, form }: BodyProps) => {
  const autoStatusRule = Form.useWatch(['autoStatusRule', 'data'], form)
  return (
    <div>
      <div className="flex gap-x-[12px] items-center">
        <div className="">当前设置</div>
      </div>
      <div className="ml-[21px] mt-[14px]">
        <div style={{ display: isActive ? 'block' : 'none' }}>
          <Form2 form={form} />
        </div>
        {!isActive && <div>当前工单已配置 {autoStatusRule?.length || 0}个 更新状态</div>}
      </div>
    </div>
  )
}
export default Body
