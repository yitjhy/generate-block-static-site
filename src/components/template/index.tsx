import React, { FC, useState, useRef } from 'react'
import { Divider, Tooltip, Space, Tabs, message } from 'antd'
import { CodeSandboxOutlined, CopyOutlined } from '@ant-design/icons'
import sdk from '@stackblitz/sdk'
import './index.css'
import HighlightCode from './../../components/hightCode'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import stackblitzParametersJson from './../../stackblitzParameters.json'

type TemplateProps = {
  children: React.ReactNode
  codeSandBoxParameter: string
  blockName: string
  allCodes: { title: string; codes: string }[]
}

const Template: FC<TemplateProps> = ({ children, blockName, codeSandBoxParameter, allCodes }) => {
  const [isShowCode, setIsShowCode] = useState(false)
  const codeSandboxIconRef = useRef(null)
  const items = allCodes.map((item) => {
    return {
      label: item.title,
      key: item.title,
      children: (
        <div className="code">
          <Tooltip title="复制">
            <CopyOutlined
              style={{ cursor: 'pointer', position: 'absolute', right: 15, top: 12 }}
              onClick={() => {
                window.navigator.clipboard.writeText(item.codes)
                message.success('复制成功')
              }}
            />
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
            <Tooltip title={'在 Stackblitz 中打开'}>
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  // @ts-ignore
                  sdk.openProject(stackblitzParametersJson[blockName], { newWindow: true })
                }}
              >
                <span role="img" aria-label="thunderbolt" className="anticon anticon-thunderbolt code-box-stackblitz">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="thunderbolt"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"></path>
                  </svg>
                </span>
              </span>
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
