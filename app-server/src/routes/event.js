const express = require("express");
const router = express.Router();
const eventTable = require("../../models").event;
const Contoroller = require("../controllers/event/event");
const controller = new Contoroller(eventTable);
const reqHandler = require("../middleware/req-handler");

router.get("/", reqHandler(controller.getAllEvents.bind(controller)));
router.post("/", reqHandler(controller.createOneEvent.bind(controller)));
router.delete("/:id", reqHandler(controller.deleteEvent.bind(controller)));

module.exports = router;
