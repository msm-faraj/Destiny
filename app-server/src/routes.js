const express = require("express");
const todoTable = require("../models").todo;
const expenceTable = require("../models").expence;

const router = express.Router();

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

// Get all expences
router.get("/expences", async (req, res) => {
  try {
    const allExpences = await expenceTable.findAll({
      order: [["id", "DESC"]],
    });
    res.json(allExpences);
  } catch (error) {
    cconsole.error(error.message);
  }
});

module.exports = router;
