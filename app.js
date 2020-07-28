import path from "path";
import express from "express";
import webpack from "webpack";
import gqlServer from "./graphqlServer.js";
import { setConfig } from "react-hot-loader";

const PORT = 3000;

const router = require("./routes/index");
const webpackConfig = require("./webpack.config.js");

setConfig({ logLevel: "debug" });
const compiler = webpack(webpackConfig);
const app = express();

gqlServer.applyMiddleware({ app });

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  })
);
app.use(require("webpack-hot-middleware")(compiler));
app.use("/dist", express.static(path.join(__dirname, "dist")));
app.use("/", router);

app.listen(PORT, () => {
  console.info(
    `Listening on port ${PORT}. Running as a ${process.env.NODE_ENV} environment. GraphQL available at ${gqlServer.graphqlPath}`
  );
});
