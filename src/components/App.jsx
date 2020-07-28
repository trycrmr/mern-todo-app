import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import "./App.css";
import AddTodoForm from "./AddTodoForm.jsx";
import TodoList from "./TodoList.jsx";
import ErrorBoundary from "./ErrorBoundary";
import AlertBox from "./AlertBox";
import { ApolloProvider } from "@apollo/client";

const App = (props) => {
  const [state, setState] = useState({
    todos: [],
  });

  const addTodo = (newTodo) => {
    setState({ todos: [...state.todos, newTodo] });
  };

  const completeToDo = (completedTodo) => {
    const updatedToDos = state.todos.map((thisTodo) => {
      if (thisTodo.id === completedTodo.id) {
        return { ...thisTodo, ...completedTodo };
      } else {
        return thisTodo;
      }
    });
    setState({ todos: updatedToDos });
  };

  return (
    <div>
      <p>
        My Todo App is great. It's the best Todo App. Ask anyone. They'll tell
        you. It's the greatest.
      </p>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={state.todos} completeToDo={completeToDo} />
      <ErrorBoundary>
        <AlertBox />
      </ErrorBoundary>
    </div>
  );
};

export default hot(App);
