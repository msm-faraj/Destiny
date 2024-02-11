const express = require("express");
const router = express.Router();
const taskTable = require("../../models").task;

router.get("/", async (req, res) => {
  try {
    const allTasks = await taskTable.findAll({});
    res.json(allTasks);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
