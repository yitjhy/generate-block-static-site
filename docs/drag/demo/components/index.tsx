import { FC, ReactNode } from 'react'
import { DragDropContext, Draggable, Droppable, OnDragEndResponder, DropResult } from 'react-beautiful-dnd'
import styled from '@emotion/styled'

const QuoteItem = styled.div`
  margin-bottom: 3px;
`

export type TListItem = {
  title: string
  id: string
}

type DroppableComProps = {
  data: TListItem[]
  droppableWrapperId: string
  getItem: (item: TListItem, index: number) => ReactNode
}

// type TOnDragEndFnParams = { source: { index: number }; destination: { index: number } }
type DragDropContextComProps = {
  children: ReactNode
  onDragEndFn: (result: DropResult) => void
}

export const DragDropContextCom: FC<DragDropContextComProps> = ({ children, onDragEndFn }) => {
  const onDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) {
      return
    }
    if (result.destination.index === result.source.index) {
      return
    }
    onDragEndFn && onDragEndFn(result)
  }

  return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
}

export const DroppableCom: FC<DroppableComProps> = ({ getItem, data = [], droppableWrapperId = 'contentId' }) => {
  return (
    <Droppable droppableId={droppableWrapperId} type={droppableWrapperId}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {data.map((item, index) => (
            <Draggable draggableId={String(item.id)} index={index} key={item.id}>
              {(provided) => (
                <QuoteItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                  {getItem(item, index)}
                </QuoteItem>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
