import React from "react";
import "./TodoList.css";
import Todo from "./Todo.jsx";

const TodoList = (props) => {
  const someTodos = [
    {
      id: 0,
      title: "todo title",
      description: "todo desc",
      createdAt: "todo created at timestamp",
      createdBy: "todo created by",
    },
    {
      id: 1,
      title: "todo title",
      description: "todo desc",
      createdAt: "todo created at timestamp",
      createdBy: "todo created by",
    },
    {
      id: 2,
      title: "todo title",
      description: "todo desc",
      createdAt: "todo created at timestamp",
      createdBy: "todo created by",
    },
    {
      id: 3,
      title: "todo title",
      description: "todo desc",
      createdAt: "todo created at timestamp",
      createdBy: "todo created by",
    },
    {
      id: 4,
      title: "todo title",
      description: "todo desc",
      createdAt: "todo created at timestamp",
      createdBy: "todo created by",
    },
  ];

  const processTodos = (arrOfTodos) => {
    return someTodos.map((thisTodo) => {
      return (
        <Todo
          key={thisTodo.id.toString()}
          title={thisTodo.title}
          description={thisTodo.description}
          createdAt={thisTodo.createdAt}
          createdBy={thisTodo.createdBy}
        />
      );
    });
  };
  return <section>{processTodos(someTodos)}</section>;
};

export default TodoList;
