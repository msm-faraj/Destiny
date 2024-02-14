const config = require("config");
const express = require("express");
const cors = require("cors");
const app = express();
const todosRouter = require("./routes/todos");
const expenceRouter = require("./routes/expences");
const taskRouter = require("./routes/task");
const habitRouter = require("./routes/habit");
const eventRouter = require("./routes/event");
const userRouter = require("./routes/user");

const port = process.env.PORT || 4040;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/todos", todosRouter);
app.use("/expences", expenceRouter);
app.use("/tasks", taskRouter);
app.use("/habits", habitRouter);
app.use("/events", eventRouter);
app.use("/users", userRouter);

// Startting the serever
app.listen(port, () => {
  console.log(`Destiny server has started on port ${port}`);
});
