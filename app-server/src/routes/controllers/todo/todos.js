const express = require("express");
const router = express.Router();
const todoTable = require("../../../../models").todo;

//Create new todo
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const newTodo = await todoTable.create({
      name: name,
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
router.get("/", async (req, res) => {
  try {
    const allTodos = await todoTable.findAll({
      order: [["id", "DESC"]],
    });
    res.json(allTodos);
  } catch (error) {
    console.error(error.message);
  }
});

//Get one todo
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todoTable.findOne({ where: { id: id } });
    res.json(todo);
  } catch (error) {
    console.error(error.message);
  }
});

//Delete a todo
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await todoTable.destroy({ where: { id: id } });
    res.json(deletedTodo);
    console.log("deleted");
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
