import { FC, useCallback } from 'react'
import { FormInstance, Form, Input, InputNumber, Select, Space } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { ACTION_OPTIONS, DURATION_UNIT_OPTIONS, STATUS_OPTIONS } from './../constants'
import { TFormFields } from '../demo'

interface DynamicTriggerRuleProps {
  form?: FormInstance<TFormFields>
}

const DynamicTriggerRule: FC<DynamicTriggerRuleProps> = ({ form }) => {
  const triggerRule = Form.useWatch(['triggerRule', 'data'], form)
  return (
    <div>
      <Form.List name={['triggerRule', 'data']}>
        {(fields, { add, remove }) => (
          <>
            <div className="flex flex-col gap-y-[12px]">
              {fields.map(({ key, name }) => (
                <Space key={key} align="baseline" style={{ display: 'flex', marginBottom: 8, alignItems: 'center' }}>
                  <span>当</span>

                  <Form.Item
                    name={[name, 'status']}
                    rules={[{ required: true, message: '请选择' }]}
                    style={{ marginBottom: 0 }}
                  >
                    <Select options={STATUS_OPTIONS} placeholder={'请选择'} style={{ width: '200px' }} />
                  </Form.Item>

                  <div>持续</div>

                  <Input.Group compact>
                    <Form.Item shouldUpdate style={{ marginBottom: 0 }}>
                      {({ getFieldValue }) => {
                        const t = getFieldValue(['triggerRule', 'data', name, 'durationUnit'])
                        return (
                          <Form.Item
                            name={[name, 'duration']}
                            rules={[
                              {
                                required: true,
                                message: '请输入',
                              },
                              {
                                type: 'number',
                                max: t === 2 ? 100 : 144400,
                              },
                            ]}
                            style={{ marginBottom: 0 }}
                          >
                            <InputNumber
                              max={t === 2 ? 100 : 144400}
                              min={1}
                              placeholder={'请输入'}
                              precision={0}
                              style={{ width: '95px' }}
                            />
                          </Form.Item>
                        )
                      }}
                    </Form.Item>

                    <Form.Item
                      name={[name, 'durationUnit']}
                      rules={[{ required: true, message: '请选择' }]}
                      style={{ marginBottom: 0 }}
                    >
                      <Select options={DURATION_UNIT_OPTIONS} placeholder={'请选择'} style={{ width: '95px' }} />
                    </Form.Item>
                  </Input.Group>

                  <span>{'时'},</span>

                  <Form.Item
                    name={[name, 'action']}
                    rules={[{ required: true, message: '请选择' }]}
                    style={{ marginBottom: 0 }}
                  >
                    <Select options={ACTION_OPTIONS} placeholder={'请选择'} style={{ width: '144px' }} />
                  </Form.Item>

                  <Form.Item
                    name={[name, 'activeValue']}
                    rules={[{ required: true, message: '请选择' }]}
                    style={{ marginBottom: 0 }}
                  >
                    <Select options={ACTION_OPTIONS} placeholder={'请选择'} style={{ width: '144px' }} />
                  </Form.Item>

                  <DeleteOutlined onClick={() => remove(name)} />
                </Space>
              ))}
            </div>
            <div className="flex">
              <div
                className={`cursor-pointer mt-[16px] rounded-[8px] py-[8px] px-[16px] text-[#1E63F5] text-[12px] flex gap-x-[4px] shadow-[0px_0px_10px_0px_#BCC9E4] ${
                  !!triggerRule?.length ? 'mt-[8px]' : '!mt-0'
                }`}
                onClick={() => add()}
              >
                + {'添加规则'}
              </div>
            </div>
          </>
        )}
      </Form.List>
    </div>
  )
}

export default DynamicTriggerRule
