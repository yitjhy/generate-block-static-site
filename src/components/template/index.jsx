import React, {useState} from 'react';
import { Divider, Tooltip } from 'antd';
import './index.css';
import HighlightCode from './../../components/hightCode'


const Template = ({children, code, title, describe}) => {
    const [isShowCode, setIsShowCode] = useState(false);
    return <div className='template'>
        <div className='templateWrapper'>
            <div className='example'>
                {
                    children
                }
            </div>
            <Divider orientation="left" orientationMargin={24}>{title}</Divider>
            <div className='introduce'>{describe}</div>
            <Divider dashed />
            <div className='operationWrapper'>
                <Tooltip placement="top" title={!isShowCode ? '显示代码' : '收起代码'}>
                    <img style={{cursor: 'pointer'}} onClick={() => setIsShowCode(!isShowCode)} alt="expand code" src="https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg" className="code-expand-icon-show" />
                </Tooltip>
            </div>
            {
                isShowCode && <div>
                    <Divider dashed />
                    <div className='code'>
                        <HighlightCode code={code} />
                    </div>
                </div>
            }
        </div>
    </div>
}

export default Template