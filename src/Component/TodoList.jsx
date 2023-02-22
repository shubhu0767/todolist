import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [isClicked, setIsCliked] = useState(0);

  console.log(isClicked);
  return (
    <div>
      <div className="task">
        <h2>Write a Letter</h2>
        <input type="checkbox" onClick={() => setIsCliked(setIsCliked + 1)} />
        <button>Delete</button>
      </div>

      <div className="task-text-heading">
        <p>T create time</p>
        <p>T delete time</p>
      </div>
    </div>
  );
};

export default TodoList;
