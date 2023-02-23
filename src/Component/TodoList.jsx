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

  return (
    <>
      {tasks.map((task) => {
        return (
          <TodoItem
            taskName={task.taskName}
            taskStatus={task.taskStatus}
            taskCreatedTime = {task.taskCreatedTime}
            taskCompletedTime = {task.taskCompletedTime}
          />
        );
      })} 
    </>
  );
};

export default TodoList;
