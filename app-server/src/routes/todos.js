const express = require("express");
const router = express.Router();
const todoTable = require("../../models").todo;
const Contoroller = require("../controllers/todo/todo");
const contoroller = new Contoroller(todoTable);
const reqHandler = require("../middleware/req-handler");

router.get("/", reqHandler(contoroller.getAllTodos.bind(contoroller)));
router.get("/:id", reqHandler(contoroller.getOneTodo.bind(contoroller)));
router.post("/", reqHandler(contoroller.createOneTodo.bind(contoroller)));
router.delete("/:id", reqHandler(contoroller.deleteOneTodo.bind(contoroller)));

module.exports = router;
