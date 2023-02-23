import React from "react";
import { useState } from "react";

const TodoList = ({taskName,taskStatus,taskCreatedTime,taskCompletedTime}) => {
  const [isClicked, setIsCliked] = useState(false);
  console.log(isClicked);

  return (
    <div className="task-item">
      <div className="task-text">
        <h2 className={isClicked ? "strike":""}>{taskName}</h2>
        <input type="checkbox" onClick={()=> setIsCliked(!isClicked)} />
        <button>Delete</button>
      </div>

      <div className="task-text-heading">
        <p>{taskCreatedTime}</p>
        <p>{taskCompletedTime}</p>
      </div>
    </div>
  );
};

export default TodoList;
