import React from "react";
import "./TodoList.css";
import Todo from "./Todo.jsx";
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../gql.js";

const TodoList = (props) => {
  const { loading, error, data } = useQuery(GET_TODOS);

  const processTodos = (arrOfTodos) => {
    if (arrOfTodos.length === 0) return "No todos. Create a todo!";
    return arrOfTodos.map((thisTodo) => {
      return (
        <Todo
          key={thisTodo.id}
          todo={thisTodo}
          completeToDo={props.completeToDo}
        />
      );
    });
  };
  if (loading) return "Loading todos...";
  if (error) return `There was an error.`;

  return <section className="todoList">{processTodos(data.todos)}</section>;
};

export default TodoList;
