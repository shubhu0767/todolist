import React from "react";
import { useState, useEffect } from "react";
import TodoItemEdit from "./TodoItemEdit";

const TodoList = ({
  id,
  taskName,
  taskStatus,
  taskCreatedTime,
  taskCompletedTime,
  taskStateChange,
  taskDeleteFunc,
  taskEditBtn,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(taskStatus == 1);
    // console.log("Test");
  }, [taskStatus]);

  function taskStatusUpdated() {
    taskStateChange(!isClicked, id);
  }

  const handleDelete = () => {
    taskDeleteFunc(id);
  };
  
  const handleEditBtn = () => {
    taskEditBtn(id);
  }

  const handlePrintBtn = (e) => {
    // cordova.plugins.printer.print(<h1>{e.target.innerHTML}</h1>);
  };

  return (
    <div className="task-item">
      <div className="task-text">
        <h2 className={isClicked ? "strike" : ""}>{taskName}</h2>
        <input
          type="checkbox"
          checked={taskStatus === 1 ? true : false}
          onChange={taskStatusUpdated}
        />
        <button onClick={handleEditBtn}>Edit</button>
        <button onClick={handlePrintBtn}>Print</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div className="task-text-heading">
        <span>{taskCreatedTime}</span>
        <span>{taskCompletedTime}</span>
      </div>
    </div>
  );
};

export default TodoList;
