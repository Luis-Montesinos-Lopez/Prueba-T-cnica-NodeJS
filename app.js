const express = require("express");
const dotenv = require("dotenv").config();
const logger = require("morgan");
const cors = require("cors");
const pc = require("picocolors");
const app = express();

const usersRouter = require("./routes/v1/usersRouter");
const datasRouter = require("./routes/v1/dataRouter");
const swaggerDocs = require("./swagger");

const port = process.env.PORT;

app.use(express.json());
app.use(express.text());
app.use(logger("dev"));
app.use(cors());

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/datas", datasRouter);

app.listen(port, () => {
    console.log(pc.cyan(`🚀 Server running on port ${port}`))
    swaggerDocs(app, port)
});