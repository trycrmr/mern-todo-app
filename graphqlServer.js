import { ApolloServer, gql } from "apollo-server-express";
import todos from "./todos.js";
import initMongo from "./models/mongo";

const mdbModels = initMongo();

const context = {
  mdbModels,
};

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
    getTodos: [Todo]
  }

  type Mutation {
    setTodo(
      id: String
      title: String
      description: String
      createdAt: String
      createdBy: String
      isCompleted: Boolean
    ): Todo
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello y'all",
    todos: () => todos,
    getTodos: async (parent, args, context, info) => {
      let result = await context.mdbModels.Todo.find({});
      return result;
    },
  },
  Mutation: {
    setTodo: async (parent, args, context, info) => {
      try {
        let res = await new context.mdbModels.Todo({
          id: `${args.id}`,
          title: `${args.title}`,
          description: `${args.description}`,
          createdBy: "Terry",
          isCompleted: false,
        }).save();
        return res;
      } catch (err) {
        return err;
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers, context });

export default server;
