const express = require("express");
const todoTable = require("../models").todo;

const router = express.Router();

//Creae new todo
router.post("/todos", async (req, res) => {
  try {
    const { name } = req.body;
    const newTodo = await todoTable.create({
      todoName: name,
    });
    res.json({
      status: 200,
      newTodo,
    });
  } catch (error) {
    console.error(error.message);
  }
});

//Get all todos
router.get("/todos", async (req, res) => {
  try {
    const allTodos = await todoTable.findAll();
    res.json(allTodos);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
