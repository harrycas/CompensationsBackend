const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// Crear la aplicación
const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/bonus-configurations", require("./routes/bonus-configurations.routes"));
app.use("/api/salary-adjustments", require("./routes/salary-adjustments.routes"));

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

// Exportar la aplicación
module.exports = app;
