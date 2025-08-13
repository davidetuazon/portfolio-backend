const express = require('express');
const { resume } = require('../controllers/resume');
const router = express.Router();

router.get('/resume', resume);

module.exports = router;