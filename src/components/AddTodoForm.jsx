import React from "react";
import Input from "./Input.jsx";

const AddTodoForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.info("todo submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <Input placeholder="placeholder text" />
      </label>
    </form>
  );
};

export default AddTodoForm;
