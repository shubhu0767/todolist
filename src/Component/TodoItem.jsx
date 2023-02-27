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

  return (
    <div className="task-item">
      <div className="task-text">
        <h2 className={isClicked ? "strike" : ""}>{taskName}</h2>
        <input
          type="checkbox"
          checked={taskStatus === 1 ? true : false}
          onChange={taskStatusUpdated}
        />
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
