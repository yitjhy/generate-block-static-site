```tsx
// @ts-nocheck
import React from 'react'
import './index.css'
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'
import { WeiboOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'

const handleClick = () => {}

const MyContextMenu = () => {
  return (
    <div>
      <ContextMenuTrigger id="same_unique_identifier">
        <span className="well" style={{ color: '#1890ff' }}>
          右键点击
        </span>
      </ContextMenuTrigger>
      <ContextMenu id="same_unique_identifier" className="contextmenu">
        <MenuItem data={{ foo: 'copy' }} onClick={handleClick}>
          <div className="in_wrapper">
            <WeiboOutlined style={{ marginRight: '9px' }} />
            复制
          </div>
        </MenuItem>
        <MenuItem data={{ foo: 'paste' }} onClick={handleClick}>
          <div className="in_wrapper">
            <QqOutlined style={{ marginRight: '9px' }} />
            粘贴
          </div>
        </MenuItem>
        <MenuItem divider />
        <MenuItem data={{ foo: 'cut' }} onClick={handleClick}>
          <div className="in_wrapper">
            <WechatOutlined style={{ marginRight: '9px' }} />
            剪切
          </div>
        </MenuItem>
      </ContextMenu>
    </div>
  )
}

export default MyContextMenu
```
