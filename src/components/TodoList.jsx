import React from "react";
import "./TodoList.css";
import Todo from "./Todo.jsx";

const TodoList = (props) => {
  const someTodos = props.todos;

  const processTodos = (arrOfTodos) => {
    return someTodos.map((thisTodo) => {
      return (
        <Todo
          key={thisTodo.id}
          todo={thisTodo}
          completeToDo={props.completeToDo}
        />
      );
    });
  };
  return <section className="todoList">{processTodos(someTodos)}</section>;
};

export default TodoList;
