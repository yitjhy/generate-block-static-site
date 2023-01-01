import React, { FC, useState } from 'react'
import { Divider, Tooltip } from 'antd'
import './index.css'
import HighlightCode from './../../components/hightCode'

type TemplateProps = {
  children: React.ReactNode
  code: string
  codeSandBoxUrl: string
}

const Template: FC<TemplateProps> = ({ children, code, codeSandBoxUrl }) => {
  const [isShowCode, setIsShowCode] = useState(false)
  return (
    <div className="template">
      <div className="templateWrapper">
        <div className="example">{children}</div>
        <Divider dashed />
        <div className="operationWrapper">
          <Tooltip placement="top" title={!isShowCode ? '显示代码' : '收起代码'}>
            <a rel="noreferrer" target="_blank" href={codeSandBoxUrl} style={{ marginRight: 16, color: '#000000e0' }}>
              codeSandBox
            </a>
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
