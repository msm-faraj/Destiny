const express = require("express");
const app = express();
const pool = require("./db");
const port = 4000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Server has started on port: ${port}`));

//Routes

//Create a todo
app.post("/todos", async (req, res) => {
  try {
    const { todo_name } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todos (todo_name) VALUES ($1) RETURNING *",
      [todo_name]
    );
    res.json(newTodo.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//Get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todos");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//Get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const wantedTodo = await pool.query(
      "SELECT * FROM todos WHERE todo_id = $1",
      [id]
    );
    res.json(wantedTodo.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//Update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { todo_name } = req.body;
    const updatedTodo = await pool.query(
      "UPDATE todos SET todo_name = $1 WHERE todo_id = $2",
      [todo_name, id]
    );
    res.json("Todo is updated!");
  } catch (error) {
    console.log(error.message);
  }
});

//Delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await pool.query(
      "UPDATE todos SET deletedat = $1 WHERE todo_id =$2",
      [new Date(), id]
    );
    res.json("Todo is deleted!");
  } catch (error) {
    console.log(error.message);
  }
});
