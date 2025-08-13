const express = require("express");
const { getProjects } = require("../controllers/projects");
const router = express.Router();

router.get("/projects", getProjects);

module.exports = router;