import React from "react";
import Input from "./Input.jsx";
import useForm from "../useForm";
import { useMutation, gql } from "@apollo/client";
import { SET_TODO } from "../gql.js";

const AddTodoForm = (props) => {
  const initialValues = {
    id: undefined,
    title: "",
    description: "",
    createdBy: "Terry",
    completed: false,
  };

  const [values, setValues] = useForm();

  const [setTodo, { data }] = useMutation(SET_TODO, {
    update(cache, { data: { newTodo } }) {
      cache.modify({
        fields: {
          todos(existingTodos = []) {
            const newTodoRef = cache.writeFragment({
              data: newTodo,
              fragment: gql`
                fragment NewTodo on todos {
                  id
                  title
                  description
                  createdAt
                  createdBy
                  isCompleted
                }
              `,
            });
          },
        },
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.title) return undefined;
    const now = new Date(Date.now()).toString();
    setTodo({
      variables: {
        id: `${values.title}${now}`,
        title: `${values.title}`,
        description: `${values.description ? values.description : null}`,
        createdAt: `${now}`,
        createdBy: "Terry",
        completed: false,
      },
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
