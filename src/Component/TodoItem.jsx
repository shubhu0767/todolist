import React from "react";
import { useState, useEffect } from "react";

const TodoList = ({
  id,
  taskName,
  taskStatus,
  taskCreatedTime,
  taskCompletedTime,
  taskStateChange,
  taskDeleteFunc,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  // console.log(setIsClicked());

  useEffect(() => {
    setIsClicked(taskStatus == 1);
  }, []);

  const taskStatusUpdated = (e) => {
    let value = e.target.checked;
    // console.log(value);
    taskStateChange(!isClicked, id);
    setIsClicked(!isClicked);
  };

  const handleDelete = () =>{
    taskDeleteFunc(id)
  }

  return (
    <div className="task-item">
      <div className="task-text">
        <h2 className={isClicked ? "strike" : ""}>{taskName}</h2>
        <input type="checkbox" onChange={taskStatusUpdated} />
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div className="task-text-heading">
        <p>{taskCreatedTime}</p>
        <p>{taskCompletedTime}</p>
      </div>
    </div>
  );
};

export default TodoList;
