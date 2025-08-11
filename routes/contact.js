const express = require("express");
const { contactForm } = require("../controllers/contact");
const router = express.Router();

router.post("/", contactForm);

module.exports = router;