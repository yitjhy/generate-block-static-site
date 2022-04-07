import React from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import styled from "@emotion/styled";

const QuoteItem = styled.div``;

export const DragDropContextCom = ({ children, onDragEndFn }) => {
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }
    onDragEndFn && onDragEndFn(result)
  }

  return <DragDropContext onDragEnd={onDragEnd}>
    { children  }
  </DragDropContext>
}

export const DroppableCom = ({ getItem, data=[], droppableWrapperId='contentId' }) => {
  return <Droppable droppableId={droppableWrapperId} type={droppableWrapperId}>
    {(provided) => (
      <div ref={provided.innerRef} {...provided.droppableProps}>
        {data.map((item, index) => (
          <Draggable draggableId={String(item.id)} index={index} key={item.id}>
            {(provided) => (
              <QuoteItem
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                {
                  getItem(item, index)
                }
              </QuoteItem>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
}

