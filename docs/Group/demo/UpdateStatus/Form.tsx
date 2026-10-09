import { FC } from 'react'
import { FormInstance, Form, Input, InputNumber, Select, Space } from 'antd'
import { DURATION_UNIT_OPTIONS, STATUS_OPTIONS_1 } from './../constants'
import { TFormFields } from '../demo'

interface UpdateStatusProps {
  form?: FormInstance<TFormFields>
  formItemWrapper?: {
    disabled?: boolean
    wrapKey?: string
  }
}

const UpdateStatus: FC<UpdateStatusProps> = ({ form }) => {
  return (
    <div className="flex flex-col gap-y-[12px]">
      <div>
        <Space align="baseline" style={{ display: 'flex', marginBottom: 8, alignItems: 'center' }}>
          <span>工单处于待回应状态持续</span>
          <Form.Item noStyle>
            <Input.Group compact>
              <Form.Item noStyle shouldUpdate>
                {({ getFieldValue }) => {
                  const t = getFieldValue(['autoStatusRule', 'data', 0, 'durationUnit'])
                  return (
                    <Form.Item
                      noStyle
                      name={['autoStatusRule', 'data', 0, 'duration']}
                      rules={[
                        { required: true, message: '请输入' },
                        {
                          type: 'number',
                          max: t === 2 ? 100 : 144400,
                        },
                      ]}
                    >
                      <InputNumber
                        max={t === 2 ? 100 : 144400}
                        min={1}
                        placeholder="请输入"
                        precision={0}
                        style={{ width: '90px' }}
                      />
                    </Form.Item>
                  )
                }}
              </Form.Item>

              <Form.Item
                noStyle
                name={['autoStatusRule', 'data', 0, 'durationUnit']}
                rules={[{ required: true, message: '请选择' }]}
              >
                <Select options={DURATION_UNIT_OPTIONS} placeholder="请选择" style={{ width: '100px' }} />
              </Form.Item>
            </Input.Group>
          </Form.Item>

          <span>后 ， 自动更新为</span>

          <Form.Item
            noStyle
            name={['autoStatusRule', 'data', 0, 'updateStatus']}
            rules={[{ required: true, message: '请选择' }]}
          >
            <Select options={STATUS_OPTIONS_1} placeholder="请选择" style={{ width: '154px' }} />
          </Form.Item>
          <Form.Item noStyle name={['autoStatusRule', 'data', 0, 'status']} hidden />
          <Form.Item noStyle name={['autoStatusRule', 'data', 0, 'id']} hidden />
        </Space>
        <Space align="baseline" style={{ display: 'flex', marginBottom: 8, alignItems: 'center' }}>
          <span>工单处于已解决状态持续</span>
          <Form.Item noStyle>
            <Input.Group compact>
              <Form.Item noStyle shouldUpdate>
                {({ getFieldValue }) => {
                  const t = getFieldValue(['autoStatusRule', 'data', 1, 'durationUnit'])
                  return (
                    <Form.Item
                      noStyle
                      name={['autoStatusRule', 'data', 1, 'duration']}
                      rules={[
                        { required: true, message: '请输入' },
                        {
                          type: 'number',
                          max: t === 2 ? 100 : 144400,
                        },
                      ]}
                    >
                      <InputNumber
                        max={t === 2 ? 100 : 144400}
                        min={1}
                        placeholder="请输入"
                        precision={0}
                        style={{ width: '90px' }}
                      />
                    </Form.Item>
                  )
                }}
              </Form.Item>

              <Form.Item
                noStyle
                name={['autoStatusRule', 'data', 1, 'durationUnit']}
                rules={[{ required: true, message: '请选择' }]}
              >
                <Select options={DURATION_UNIT_OPTIONS} placeholder="请选择" style={{ width: '100px' }} />
              </Form.Item>
            </Input.Group>
          </Form.Item>

          <span>后 ， 自动更新为</span>

          <Form.Item
            noStyle
            initialValue="closed"
            name={['autoStatusRule', 'data', 1, 'updateStatus']}
            rules={[{ required: true, message: '请选择' }]}
          >
            <Select disabled options={STATUS_OPTIONS_1} placeholder="请选择" style={{ width: '154px' }} />
          </Form.Item>
          <Form.Item noStyle name={['autoStatusRule', 'data', 1, 'status']} hidden />
          <Form.Item noStyle name={['autoStatusRule', 'data', 1, 'id']} hidden />
        </Space>
      </div>
    </div>
  )
}

export default UpdateStatus
