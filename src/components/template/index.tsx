import React, { FC, useState, useRef } from 'react'
import { Divider, Tooltip, Space, Tabs } from 'antd'
import { CodeSandboxOutlined, CopyOutlined } from '@ant-design/icons'
import './index.css'
import HighlightCode from './../../components/hightCode'
import { CopyToClipboard } from 'react-copy-to-clipboard'

type TemplateProps = {
  children: React.ReactNode
  codeSandBoxParameter: string
  allCodes: { title: string; codes: string }[]
}

const Template: FC<TemplateProps> = ({ children, codeSandBoxParameter, allCodes }) => {
  const [isShowCode, setIsShowCode] = useState(false)
  const codeSandboxIconRef = useRef(null)
  const items = allCodes.map((item) => {
    return {
      label: item.title,
      key: item.title,
      children: (
        <div className="code">
          <Tooltip title="复制">
            <CopyToClipboard text={item.codes}>
              <CopyOutlined style={{ cursor: 'pointer', position: 'absolute', right: 15, top: 12 }} />
            </CopyToClipboard>
          </Tooltip>
          <HighlightCode code={item.codes} />
        </div>
      ),
    }
  })
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
          <div className="codes">
            <Divider dashed />
            <Tabs defaultActiveKey="demo.tsx" type="card" tabPosition="left" items={items} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Template
