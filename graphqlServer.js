import { ApolloServer, gql } from "apollo-server-express";

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
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello y'all",
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
