const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require ("./swagger.json");

const swaggerDocs = (app, port) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.get("/api-docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    console.log(`📓 Version 1.0.0 are available at localhost:${port}/api-docs`);
};

module.exports = swaggerDocs;