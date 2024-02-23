const express = require("express");
const datasRouter = express.Router();
const pc = require("picocolors");
const { getData } = require("../controllers/datasControllers");
const verifyTokenMiddleware = require("../utils/verifiTokenMiddleware");

datasRouter.use("/", (req, res, next) => {
    console.log(pc.magenta("Using datas Router..."))
    next();
})
datasRouter.get("/",verifyTokenMiddleware, getData);
module.exports = datasRouter;