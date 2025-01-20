const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");

// Create app
const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Load routes dynamically
const routesPath = path.join(__dirname, "routes");
fs.readdirSync(routesPath).forEach((file) => {
    if (file.endsWith(".routes.js")) {
        const route = require(path.join(routesPath, file));
        app.use(`/api/${file.replace(".routes.js", "")}`, route);
    }
});

// Middleware for handling global errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: err.message || "Something went wrong!",
    });
});

// Exportar la aplicación
module.exports = app;
