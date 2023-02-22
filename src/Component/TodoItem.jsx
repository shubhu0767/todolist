import React from "react";
import { useState } from "react";

const TodoList = ({taskTest}) => {
  const [isClicked, setIsCliked] = useState(true);
  console.log(taskTest);

  return (
    <div className="task-item">
      <div className="task-text">
        <h2>Write a Letter</h2>
        <input type="checkbox" onChange={() => setIsCliked({setIsCliked : false})} />
        <button>Delete</button>
      </div>
      <div className="task-text-heading">
        <p>T create time</p>
        <p>T completion time</p>
      </div>
    </div>
  );
};

export default TodoList;
