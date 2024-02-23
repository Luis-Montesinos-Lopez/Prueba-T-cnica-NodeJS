const db = require("../dbConnection");
const md5 = require("md5");
const moment = require("moment");

let usersQuerys = {};

usersQuerys.getUserByEmail = async (email) => {
    conn = null
    try {
        conn = await db.createConnection();
        const rows = await db.query("SELECT * FROM users WHERE email = ?", email, "select", conn);
        return rows
    } catch (e) {
        throw new Error(e.message)
    } finally {
        conn && await conn.close();
    }
};
usersQuerys.addUser = async (userData) => {
    conn = null;
    try {
        conn = await db.createConnection();
        const userObject = [
            userData.nombre,
            userData.email,
            md5(userData.password),
            moment().format("YYYY-MM-DD HH:mm:ss")]
        const rows = await db.query("INSERT INTO users (nombre, email, password, fechaRegistro) VALUES (?, ?, ?, ?)", userObject, "insert", conn);
        return rows;
    } catch (e) {
        throw new Error(e.message)
    } finally {
        conn && await conn.close();
    }

}

module.exports = usersQuerys;
