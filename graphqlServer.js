import { ApolloServer, gql } from "apollo-server-express";
import todos from "./todos.js";

const typeDefs = `
  type Todo { 
    id: String
    title: String
    description: String
    createdAt: String
    createdBy: String
    isCompleted: Boolean
  }
  
  type Query {
    hello: String,
    todos: [Todo]
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello y'all",
    todos: () => todos,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export default server;

// export default `{
//   todo {
// id
// title
// description
// createdAt
// createdBy
// isCompleted
//   }
// }
