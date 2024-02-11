const express = require("express");
const router = express.Router();
const userTable = require("../../models").user;

router.get("/", async (req, res) => {
  try {
    const allUsers = await userTable.findAll({});
    res.json(allUsers);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
