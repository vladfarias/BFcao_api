const express = require("express");
const morgan = require("morgan");
const walkerRouter = require("./routes/walkerRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

//MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json()); //Parse to an object

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString;
  next();
});

// ROUTER
app.use("/api/v1/walker", walkerRouter);
app.use("/api/v1/user", userRouter);

module.exports = app;
