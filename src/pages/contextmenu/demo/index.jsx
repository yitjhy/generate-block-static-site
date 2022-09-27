import React  from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { WeiboOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'

const handleClick = (e, data) => {
    console.log(data.foo);
}

const MyContextMenu = () => {
    return (
        <div>
            <ContextMenuTrigger id="same_unique_identifier">
                <span className="well">右键</span>
            </ContextMenuTrigger>
            <ContextMenu id="same_unique_identifier" style={{background: '#e1e3e3', width: '150px', padding: '8px 14px', borderRadius: '4px', zIndex: 5}}>
                <MenuItem data={{foo: 'copy'}} onClick={handleClick}>
                    <div style={{cursor: 'pointer', marginBottom: '4px'}}>
                        <WeiboOutlined style={{marginRight: '9px'}} />复制
                    </div>
                </MenuItem>
                <MenuItem data={{foo: 'paste'}} onClick={handleClick}>
                    <div style={{cursor: 'pointer', marginBottom: '4px'}}>
                        <QqOutlined style={{marginRight: '9px'}} />粘贴
                    </div>
                </MenuItem>
                <MenuItem divider />
                <MenuItem data={{foo: 'cut'}} onClick={handleClick}>
                    <div style={{cursor: 'pointer'}}>
                        <WechatOutlined style={{marginRight: '9px'}} />剪切
                    </div>
                </MenuItem>
            </ContextMenu>
        </div>
    );
}

export default MyContextMenu