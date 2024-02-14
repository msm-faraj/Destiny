const express = require("express");
const router = express.Router();
const taskTable = require("../../models").task;
const Controller = require("../controllers/task/task");
const contoroller = new Controller(taskTable);
const reqHandler = require("../middleware/req-handler");

router.get("/", reqHandler(contoroller.getAllTasks.bind(contoroller)));
router.post("/", reqHandler(contoroller.createOneTask.bind(contoroller)));
router.delete("/:id", reqHandler(contoroller.deleteOneTask.bind(contoroller)));

module.exports = router;
