import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoItemEdit from "./TodoItemEdit";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    {
      taskName: "Task 1",
      taskStatus: 0,
      taskCreatedTime: "",
      taskCompletedTime: "",
      taskBody: "",
    },
    {
      taskName: "Task 2",
      taskStatus: 1,
      taskCreatedTime: "",
      taskCompletedTime: "",
      taskBody: "",
    },
    {
      taskName: "Task 3",
      taskStatus: 0,
      taskCreatedTime: "",
      taskCompletedTime: "",
      taskBody: "",
    },
  ]);

  const [editItem, setEditItem] = useState({});
  const [showEdit, setShowEdit] = useState(false);

  // Task Status Update Function
  const taskStateChange = (taskStatus, id) => {
    tasks[id].taskStatus = taskStatus ? 1 : 0;
    setTasks([...tasks]);
  };

  //Task Delete function
  const taskDelete = (id) => {
    tasks.splice(id, 1);
    setTasks([...tasks]);
  };

  // Task Edit Functions
  const taskEdit = (id) => {
    // console.log(tasks[id]);
    setEditItem(tasks[id]);
    setShowEdit(true);
  };

  const closeEditDialog = () => {
    setShowEdit(false);
  };

  // const showEditDialog = () => {
    if (showEdit) {
      return (
        <div className="box">
          <TodoItemEdit
            taskEditBtn={closeEditDialog}
            taskName={editItem.taskName}
          />
        </div>
      );
    }
  // };

  return (
    <>
      {/* {showEditDialog()} */}
      {tasks.map((task, i) => {
        return (
          <TodoItem
            key={i}
            id={i}
            taskName={task.taskName}
            taskStatus={task.taskStatus}
            taskCreatedTime={task.taskCreatedTime}
            taskCompletedTime={task.taskCompletedTime}
            taskStateChange={taskStateChange}
            taskDeleteFunc={taskDelete}
            taskEditBtn={taskEdit}
          />
        );
      })}
    </>
  );
};

export default TodoList;
