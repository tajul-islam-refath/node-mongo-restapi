const express = require("express");
const morgan = require("morgan");

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

const setupRoutes = () => {
  // routers import routers
  const studentRouters = require("./routes/student.router");

  // apply routers
  app.use("/api/v1/student", studentRouters);

  app.use("/", (req, res) => {
    res.send("what are you doing there ?");
  });
};

module.exports = { app, setupRoutes };
