import React, { FC, useState, useRef } from 'react'
import { Divider, Tooltip, Space } from 'antd'
import { CodeSandboxOutlined } from '@ant-design/icons'
import './index.css'
import HighlightCode from './../../components/hightCode'

type TemplateProps = {
  children: React.ReactNode
  code: string
  codeSandBoxParameter: string
}

const Template: FC<TemplateProps> = ({ children, code, codeSandBoxParameter }) => {
  const [isShowCode, setIsShowCode] = useState(false)
  const codeSandboxIconRef = useRef(null)
  return (
    <div className="template">
      <div className="templateWrapper">
        <div className="example">{children}</div>
        <Divider dashed />
        <div className="operationWrapper">
          <Space style={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title={'在 CodeSandbox 中打开'}>
              <form
                className="code-box-code-action"
                action="https://codesandbox.io/api/v1/sandboxes/define"
                method="POST"
                target="_blank"
                ref={codeSandboxIconRef}
                onClick={() => {
                  // @ts-ignore
                  codeSandboxIconRef?.current?.submit()
                }}
              >
                <input type="hidden" name="parameters" value={codeSandBoxParameter} />
                <CodeSandboxOutlined style={{ cursor: 'pointer' }} />
              </form>
            </Tooltip>
            <Tooltip placement="top" title={!isShowCode ? '显示代码' : '收起代码'}>
              <img
                style={{ cursor: 'pointer' }}
                onClick={() => setIsShowCode(!isShowCode)}
                alt="expand code"
                src="https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg"
                className="code-expand-icon-show"
              />
            </Tooltip>
          </Space>
        </div>
        {isShowCode && (
          <div>
            <Divider dashed />
            <div className="code">
              <HighlightCode code={code} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Template
