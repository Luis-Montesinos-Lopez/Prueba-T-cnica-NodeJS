const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const logger = require("morgan");
const cors = require("cors");
const pc = require("picocolors");

const usersRouter = require("./routes/usersRouter");
const datasRouter = require("./routes/dataRouter");
const swaggerDocs = require("./swagger")
const port = process.env.PORT;

app.use(express.json());
app.use(express.text());
app.use(logger("dev"));
app.use(cors());

app.use("/users", usersRouter);
app.use("/datas", datasRouter);

app.listen(port, () => {
    console.log(pc.cyan(`🚀 Server running on port ${port}`))
    swaggerDocs(app, port)
});