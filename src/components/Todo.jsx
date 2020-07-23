import React from "react";

const Todo = (props) => {
  return (
    <summary>
      {props.title}
      <details>
        <p>{props.description}</p>
        Created at {props.createdAt} by {props.createdBy}.
      </details>
    </summary>
  );
};

export default Todo;
