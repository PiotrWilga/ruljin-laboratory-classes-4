const express = require("express");
const { getLogoutView, killAplication } = require("../controllers/logoutController");

const router = express.Router();

router.get("/", getLogoutView);
router.get("/kill", killAplication);

module.exports = router;
