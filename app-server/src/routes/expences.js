const express = require("express");
const router = express.Router();
const expenceTable = require("../../models").expence;
const Contoroller = require("../controllers/expence/expence");
const controller = new Contoroller(expenceTable);
const reqHandler = require("../middleware/req-handler");

router.get("/", reqHandler(controller.getAllExpences.bind(controller)));
router.get("/:id", reqHandler(controller.getOneExpence.bind(controller)));
router.post("/", reqHandler(controller.createOneExpences.bind(controller)));
router.delete("/:id", reqHandler(controller.deleteOneExpence.bind(controller)));

module.exports = router;
