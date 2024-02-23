const { ZodError } = require("zod");
const md5 = require("md5");
const { SignJWT } = require("jose");
const { ValidateUser, ValidateLogin } = require("../utils/ZodSchemas");
const usersQuerys = require("../services/querys/usersQuerys");

let users = {};
users.addUser = async (req, res) => {
    try {
        const validate = ValidateUser.parse(req.body);
        const user = await usersQuerys.getUserByEmail(validate.email);
        if (user.length > 0) {
            return res.status(400).send("El usuario ya existe")
        }
        const result = await usersQuerys.addUser(validate);
        return res.status(201).send(`Usuario ${validate.nombre} creado exitosamente`)
    } catch (e) {
        if (e instanceof ZodError) return res.status(400).send(e.issues.map(issue => issue.message))
        return res.status(500).send(e.message)
    }
};
users.login = async (req, res) => {
    try {
        const validate = ValidateLogin.parse(req.body)
        const user = await usersQuerys.getUserByEmail(validate.email);
        if (user.length <= 0) {
            return res.status(404).send("El usuario no existe")
        }
        if (user[0].password !== md5(validate.password)) {
            return res.status(401).send("Contraseña incorrecta")
        }
        const jwtConstructor = new SignJWT({ id: user[0].id,email:user[0].email });
        const encoder = new TextEncoder();
        const jwt = await jwtConstructor
            .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
            .sign(encoder.encode(process.env.JWT_SECRET));
        return res.send({jwt})
    } catch (e) {
        if (e instanceof ZodError) return res.status(400).send(e.issues.map(issue => issue.message))
        return res.status(500).send(e.message)
    }
};
module.exports = users;