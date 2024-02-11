const express = require("express");
const router = express.Router();
const eventTable = require("../../models").event;

router.get("/", async (req, res) => {
  try {
    const allEvents = await eventTable.findAll({});
    res.json(allEvents);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
