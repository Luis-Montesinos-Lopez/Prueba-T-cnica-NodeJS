const express = require("express");
const usersRouter = express.Router();
const pc = require("picocolors");
const { addUser, login } = require("../../controllers/v1/usersControllers");


usersRouter.use("/", (req, res, next) => {
    console.log(pc.magenta("Using users Router..."))
    next();
})

usersRouter.post("/", addUser);
usersRouter.post("/login", login);

module.exports = usersRouter;