# 拖拽

## 可以 npx generateblock 下载使用

```jsx
import React, { useState } from 'react';
import { DragDropContextCom, DroppableCom } from "./drag";

const initList = [
  {title: '111', id: 'sdd'},
  {title: '222', id: 'dsf'},
  {title: '333', id: 'xdcsd'},
  {title: '444', id: 'sdaqw'},
  {title: '555', id: 'sdfsdxcvc'},
  {title: '666', id: 'dfvxc'},
  {title: '777', id: 'vcbv'},
  {title: '888', id: 'yuf'},
  {title: '999', id: 'dfgcvqqw'},
]

const Template = () => {
    const [list, setList] = useState(initList);
    const onDragEndFn = dragInfo => {
          const {source: {index: startIndex}, destination: {index: endIndex}} = dragInfo;
          const result = Array.from(list);
          const [removed] = result.splice(startIndex, 1);
          result.splice(endIndex, 0, removed);
          setList(result)
    }
    
    const getItem = (item, index) => {
      return <div key={item.id} 
                  style={{
                      padding: '11px 15px', 
                      background: '#bac1e3',
                      borderRadius: '3px'
                  }}
      >
        {item.title}
      </div>
    }
  
    return <DragDropContextCom onDragEndFn={onDragEndFn}>
        <DroppableCom data={list} getItem={getItem} droppableWrapperId='contentId' />
    </DragDropContextCom>
}

export default Template

```
