import React from "react";

const CompleteToDo = (props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="checkbox"
        value={props.todo.completed}
        onChange={(e) =>
          props.handleChange({
            ...props.todo,
            completed: !props.todo.completed,
          })
        }
      ></input>
    </form>
  );
};

export default CompleteToDo;
