import React from "react";
import Input from "./Input.jsx";
import useForm from "../useForm";

const AddTodoForm = (props) => {
  const initialValues = {
    id: undefined,
    title: "",
    description: "",
    createdBy: "Terry",
    completed: false,
  };

  const [values, setValues] = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.title) return undefined;
    const now = new Date(Date.now()).toString();
    props.addTodo({
      id: `${values.title}${now}`,
      title: `${values.title}`,
      description: `${values.description ? values.description : null}`,
      createdAt: now,
      createdBy: `Terry`,
      completed: false,
    });
    setValues(initialValues);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          name="title"
          type="text"
          placeholder="Enter a to do..."
          onChange={handleChange}
          value={values.title ? values.title : ""}
        ></input>
      </label>
    </form>
  );
};

export default AddTodoForm;
