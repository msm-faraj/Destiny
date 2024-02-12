const express = require("express");
const router = express.Router();
const habitTable = require("../../models").habit;
const Contoroller = require("../controllers/habit/habit");
const controller = new Contoroller(habitTable);
const reqHandler = require("../middleware/req-handler");

router.get("/", reqHandler(controller.getAllHabits.bind(controller)));
router.post("/", reqHandler(controller.createOneHabit.bind(controller)));

module.exports = router;
