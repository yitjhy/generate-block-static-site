# 拖拽

## generateblock drag 下载使用

```tsx
import { useState } from 'react'
import { DragDropContextCom, DroppableCom, TListItem } from './components'
import { DropResult } from 'react-beautiful-dnd'

const initList: TListItem[] = [
  { title: '111', id: 'sdd' },
  { title: '222', id: 'dsf' },
  { title: '333', id: 'as' },
  { title: '444', id: 'ds' },
  { title: '555', id: 'dgh' },
]

const DragBlock = () => {
  const [list, setList] = useState<TListItem[]>(initList)
  const onDragEndFn = (dragInfo: DropResult) => {
    const startIndex = dragInfo.source.index
    const endIndex = dragInfo.destination?.index
    const result = Array.from<TListItem>(list)
    const [removed] = result.splice(startIndex, 1)
    if (endIndex) result.splice(endIndex, 0, removed)
    setList(result)
  }

  const getItem = (item: TListItem) => {
    return (
      <div
        key={item.id}
        style={{
          padding: '11px 15px',
          background: '#bac1e3',
          borderRadius: '3px',
        }}
      >
        {item.title}
      </div>
    )
  }

  return (
    <DragDropContextCom onDragEndFn={onDragEndFn}>
      <DroppableCom data={list} getItem={getItem} droppableWrapperId="contentId" />
    </DragDropContextCom>
  )
}

export default DragBlock
```
