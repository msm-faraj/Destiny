const express = require("express");
const todoTable = require("../models").todo;
const expenceTable = require("../models").expence;

const router = express.Router();

//Creae new todo
router.post("/todos", async (req, res) => {
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

//Create new expence
router.post("/expences", async (req, res) => {
  try {
    const { account, time, category, amount, note, description } = req.body;
    const newExpence = await expenceTable.create({
      account: account,
      time: time,
      category: category,
      amount: amount,
      note: note,
      description: description,
    });
    res.json(newExpence);
  } catch (error) {
    console.error(error.message);
  }
});

//Get all todos
router.get("/todos", async (req, res) => {
  try {
    const allTodos = await todoTable.findAll({
      order: [["id", "DESC"]],
    });
    res.json(allTodos);
  } catch (error) {
    console.error(error.message);
  }
});

// Get all expences
router.get("/expences", async (req, res) => {
  try {
    const allExpences = await expenceTable.findAll();
    res.json(allExpences);
  } catch (error) {
    cconsole.error(error.message);
  }
});

//Get a todo
router.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todoTable.findOne({ where: { id: id } });
    res.json(todo);
  } catch (error) {
    console.error(error.message);
  }
});

//Update a todo

//Delete a todo
router.delete("/todos/:id", async (req, res) => {
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
