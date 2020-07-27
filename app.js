// const path = require('path')
import path from "path";
const express = require("express");
const webpack = require("webpack");

import { setConfig } from "react-hot-loader";
setConfig({ logLevel: "debug" });

const router = require("./routes/index");

const webpackConfig = require("./webpack.config.js");
const compiler = webpack(webpackConfig);

const PORT = 3000;

const app = express();

app.use(
  require("webpack-dev-middleware")(compiler, {
    // noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  })
);
app.use(require("webpack-hot-middleware")(compiler));

app.use("/dist", express.static(path.join(__dirname, "dist")));

app.use("/", router);

app.listen(PORT, () => {
  console.info(
    `Listening on port ${PORT}. Running as a ${process.env.NODE_ENV} environment.`
  );
});
