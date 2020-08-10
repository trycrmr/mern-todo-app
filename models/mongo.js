import mongoose, { mongo } from "mongoose";
import schemas from "./mongoSchemas";

// Connection URL
const url = "mongodb://localhost:27017/mern-todo-app";

const connectToMongo = () => {
  try {
    const conn = mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return mongoose;
  } catch (err) {
    return err;
  }
};

const initModels = () => {
  try {
    const models = schemas.reduce((acc, curr, currIdx) => {
      acc[curr.name] = new mongoose.model(
        curr.name,
        new mongoose.Schema(curr.schema)
      );
      return acc;
    }, {});
    return models;
  } catch (err) {
    console.error(err);
    return err;
  }
};

const initMongo = () => {
  try {
    connectToMongo();
    const models = initModels();
    return models;
  } catch (err) {
    console.error("Error initializing Mongo...");
    throw err; // Just crash the app before things get started if the database connection to Mongo fails.
  }
};

export default initMongo;
