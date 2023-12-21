const express = require("express");
const app = express();
const pool = require("./db");
const port = 4000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

//Routes

//create a todo
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todos");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));
