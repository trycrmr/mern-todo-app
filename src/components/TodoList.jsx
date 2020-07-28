import React from "react";
import "./TodoList.css";
import Todo from "./Todo.jsx";
import { gql, useQuery } from "@apollo/client";

const GET_TODOS = gql`
  {
    todos {
      id
      title
      description
      createdAt
      createdBy
      isCompleted
    }
  }
`;

const TodoList = (props) => {
  const { loading, error, data } = useQuery(GET_TODOS);
  // const someTodos = props.todos;

  const processTodos = (arrOfTodos) => {
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
