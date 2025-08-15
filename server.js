require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const logger = require("./src/middleware/logger");
const path = require('path');
const rateLimit = require('express-rate-limit');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use (morgan("dev"));
app.use(logger);

const contactLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 3,
    message: { error: "Too many requests, please try again later" }
});

const projectRoutes = require(path.resolve(".") + "/src/routes/projects");
const contactRoutes = require(path.resolve(".") + "/src/routes/contact");
const resumeRoutes = require(path.resolve(".") + "/src/routes/resume");

const basepath = '/api';

// Routes
app.use(basepath + "/david", projectRoutes);
app.use(basepath + "/david", contactLimiter, contactRoutes);
app.use(basepath + "/david", resumeRoutes);

// 404 Handler
app.use((req, res, next) => {
    res.status(404).json({ error: "Not Found" });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong" });
})

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});