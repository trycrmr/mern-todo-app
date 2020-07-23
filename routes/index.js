const router = require("express").Router();
import path from "path";
import utils from "../utils";
const mw = require("../middlewares");

const todos = require("./todos");

router.use((req, res, next) => {
  console.info(`${req.originalUrl} ${req.method} ${mw.getTime()}`);
  next();
});

router.get("/", (req, res) => {
  res.sendFile(path.join(utils.getAppRoot, "dist/index.html"));
});

router.use("/todos", todos);

module.exports = router;
