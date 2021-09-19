import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./parts.css";

function Temp() {
  const [data, setData] = useState(tempData);

  const handleChange = (result) => {
    // console.log(result);
    if (!result.destination.index) return;

    const items = Array.from(data);
    const [reordererItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordererItem);

    setData(items);
  };

  return (
    <DragDropContext onDragEnd={handleChange}>
      <Droppable droppableId="ourList">
        {(provided) => (
          <div
            className="gap-10 mx-auto w-28 noselect"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {data.map((item, idx) => (
              <Draggable key={item} draggableId={item} index={idx}>
                {(provided) => {
                  // console.log(idx);
                  return (
                    <div
                      className="h-12 bg-blue-300 border border-yellow-100"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <h3>{item}</h3>
                    </div>
                  );
                }}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Temp;

const tempData = ["Satu", "Dua", "Tiga", "Empat", "Lima", "Enam"];
