const express = require("express");
const router = express.Router();
const habitTable = require("../../models").habit;

router.get("/", async (req, res) => {
  try {
    const allHabits = await habitTable.findAll({});
    res.json(allHabits);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
