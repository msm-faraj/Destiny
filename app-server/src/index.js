const appRoutes = require("./routes");
const Joi = require("joi");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const todosRouter = require("./routes/controllers/todo/todos");
const port = process.env.PORT || 4040;
// Middleware
app.use(express.json());
app.use(cors());
app.use("/todos", todosRouter);

// Router
// app.use("/", appRoutes);

// Start the serever
app.listen(port, () => {
  console.log(`Destiny server has started on port ${port}`);
});
