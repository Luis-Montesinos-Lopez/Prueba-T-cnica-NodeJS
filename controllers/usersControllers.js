const { ZodError } = require("zod");
const md5 = require("md5");
const { SignJWT } = require("jose");
const usersQuerys = require("../services/querys/usersQuerys");
const { validateUser, validateLogin } = require("../utils/zodSchemas");

let users = {};

users.addUser = async (req, res) => {
    try {
        const validate = validateUser.parse(req.body);
        const user = await usersQuerys.getUserByEmail(validate.email);
        if (user) {
            return res.status(400).send("User already exists")
        };
        await usersQuerys.addUser(validate);
        return res.status(201).send(`User ${validate.nombre} successfully created`)
    } catch (e) {
        if (e instanceof ZodError) return res.status(400).send(e.issues.map(issue => issue.message))
        return res.status(500).send(e.message)
    };
};

users.login = async (req, res) => {
    try {
        const validate = validateLogin.parse(req.body)
        const user = await usersQuerys.getUserByEmail(validate.email);
        if (!user) {
            return res.status(404).send("The user does not exist")
        }
        if (user.password !== md5(validate.password)) {
            return res.status(401).send("Incorrect password")
        }
        const jwtConstructor = new SignJWT({ id: user.id, email: user.email });
        const encoder = new TextEncoder();
        const jwt = await jwtConstructor
            .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
            .setExpirationTime("1h")
            .sign(encoder.encode(process.env.JWT_SECRET));
        return res.send({ jwt })
    } catch (e) {
        if (e instanceof ZodError) return res.status(400).send(e.issues.map(issue => issue.message))
        return res.status(500).send(e.message)
    }
};

module.exports = users;