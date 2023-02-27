import React,{useState} from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    {
      taskName: "Task 1",
      taskStatus: 0,
      taskCreatedTime: "",
      taskCompletedTime: "",
      taskBody:"",
    },
    {
      taskName: "Task 2",
      taskStatus: 0,
      taskCreatedTime: "",
      taskCompletedTime: "",
      taskBody:"",
    },
    {
      taskName: "Task 3",
      taskStatus: 0,
      taskCreatedTime: "",
      taskCompletedTime: "",
      taskBody:"",
    },
  ])
  
  const taskStateChange=(taskStatus, id)=>{
    tasks[id].taskStatus = taskStatus ? 1:0;
  }
    //Task Delete function
  const taskDelete = (id)=> {  
    console.log(id);
    // tasks.splice(id, 1);
    setTasks(tasks.splice(id, 1));
    console.log("------",tasks);
  }
  console.log(tasks);
  
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
            taskDeleteFunc = {taskDelete}
          />
        );
      })} 
    </>
  );
};

export default TodoList;
