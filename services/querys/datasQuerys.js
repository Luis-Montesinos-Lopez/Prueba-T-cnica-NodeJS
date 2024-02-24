const db = require("../dbConnection");

let dataQuerys = {};

dataQuerys.getData = async () => {
    conn = null;
    try {
        conn = await db.createConnection();
        const rows = await db.query("SELECT * FROM datas", [], "select", conn);
        return rows
    } catch (e) {
        throw new Error("Error al obtener datos: " + e.message)
    } finally {
        conn && await conn.close();
    };
};


module.exports = dataQuerys;

