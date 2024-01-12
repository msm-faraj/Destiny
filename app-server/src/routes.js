const express = require("express");
const todoTable = require("../models").todo;

const router = express.Router();

router.get("/addtodo", (req, res) => {
  todoTable.create({
    todoName: "first todo",
  });
});

router.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Hello World!",
  });
});

module.exports = router;
