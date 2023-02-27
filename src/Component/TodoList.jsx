import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const tasks = [
    {
      taskName: "Task 1",
      taskStatus: 0,
      taskCreatedTime: "",
      taskCompletedTime: "",
    },
    {
      taskName: "Task 2",
      taskStatus: 0,
      taskCreatedTime: "",
      taskCompletedTime: "",
    },
    {
      taskName: "Task 3",
      taskStatus: 0,
      taskCreatedTime: "",
      taskCompletedTime: "",
    },
  ];
  
  // console.log(tasks);
  
  const taskStateChange=(taskStatus, id)=>{
    tasks[id].taskStatus = taskStatus ? 1:0;
    // console.log(tasks);
  }

  return (
    <>
      {tasks.map((task, i) => {
        return (
          <TodoItem
            id={i}
            taskName={task.taskName}
            taskStatus={task.taskStatus}
            taskCreatedTime = {task.taskCreatedTime}
            taskCompletedTime = {task.taskCompletedTime}
            taskStateChange = {taskStateChange}
          />
        );
      })} 
    </>
  );
};

export default TodoList;
