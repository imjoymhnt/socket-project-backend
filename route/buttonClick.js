const express = require("express");
const { createButtonClick } = require("../controller/buttonClick");
const router = express.Router();

router.post("/create-button-click", createButtonClick);

module.exports = router;
