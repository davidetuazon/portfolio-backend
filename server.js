require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const logger = require("./middleware/logger");

const projectRoutes = require("./routes/projects");
const contactRoutes = require("./routes/contact");

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use (morgan("dev"));
app.use(logger);

// Routes
app.use("/projects", projectRoutes);
app.use("/contact", contactRoutes);

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