import React from "react";
import CompleteToDo from "./CompleteToDo.jsx";
import "./Todo.css";

const Todo = (props) => {
  return (
    <summary className={props.todo.completed ? "completed" : "notCompleted"}>
      <CompleteToDo todo={props.todo} handleChange={props.completeToDo} />
      {props.todo.title} {props.todo.completed ? " (complete)" : ""}
      <details>
        <p>{props.todo.description}</p>
        Created at {props.todo.createdAt} by {props.todo.createdBy}.
      </details>
    </summary>
  );
};

export default Todo;
