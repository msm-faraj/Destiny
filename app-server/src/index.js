const config = require("config");
const express = require("express");
const cors = require("cors");
const app = express();
const todosRouter = require("./routes/todos");
const expenceRouter = require("./routes/expences");
const port = process.env.PORT || 4040;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/todos", todosRouter);
app.use("/expences", expenceRouter);
// app.use("/habit", habitRouter);

// Configuration
console.log("Application Name:", config.get("name"));
console.log("Application Name:", config.get("mail.host"));
// console.log("Application Pass:", config.get("mail.password"));

// Startting the serever
app.listen(port, () => {
  console.log(`Destiny server has started on port ${port}`);
});
