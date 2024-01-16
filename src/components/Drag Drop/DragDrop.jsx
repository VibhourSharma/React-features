import { useState } from "react";
import "./DragDrop.css";

const DragDrop = () => {
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetItem) => {
    e.preventDefault();
    console.log(`Dropped ${draggedItem} onto ${targetItem}`);
    alert(`Dropped ${draggedItem} onto ${targetItem}`);
    setDraggedItem(null);
  };

  return (
    <div className="drag-and-drop">
      <h3>/Drag And Drop</h3>
      <p>Please drag one item button on other</p>
      <div className="drag-and-drop-container">
        <div
          className={`drag-item ${draggedItem === "Item 1" ? "dragging" : ""}`}
          draggable
          onDragStart={(e) => handleDragStart(e, "Item 1")}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "Item 1")}
        >
          Item 1
        </div>

        <div
          className={`drag-item ${draggedItem === "Item 2" ? "dragging" : ""}`}
          draggable
          onDragStart={(e) => handleDragStart(e, "Item 2")}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "Item 2")}
        >
          Item 2
        </div>
      </div>
    </div>
  );
};

export default DragDrop;
