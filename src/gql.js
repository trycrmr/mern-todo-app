import { gql } from "@apollo/client";

const SET_TODO = gql`
  mutation SetTodo(
    $id: String
    $title: String
    $description: String
    $createdAt: String
    $createdBy: String
    $isCompleted: Boolean
  ) {
    setTodo(
      id: $id
      title: $title
      description: $description
      createdAt: $createdAt
      createdBy: $createdBy
      isCompleted: $isCompleted
    ) {
      id
      title
      description
      createdAt
      createdBy
      isCompleted
    }
  }
`;

const GET_TODOS = gql`
  query {
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

export { SET_TODO, GET_TODOS };
