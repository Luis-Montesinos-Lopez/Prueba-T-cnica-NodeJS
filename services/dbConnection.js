const sqlite3 = require('sqlite3').verbose();
const path = require("path");
const dbPath = path.resolve(__dirname, "../db.sqlite3");
let db = {};

db.createConnection = async () => {
    return new Promise((resolve, reject) => {
        try {
            let conn = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (e) => {
                if (e) {
                    reject(new Error(e.message));
                } else {
                    resolve(conn);
                }
            });
        } catch (e) {
            reject(new Error(e.message));
        }
    });
};

db.query = async (sqlQuery, params, type, conn) => {
    return new Promise((resolve, reject) => {
        try {
            conn.all(sqlQuery, params, (err, rows) => {
                if (!err) {
                    switch (type) {
                        case 'select':
                            resolve(JSON.parse(JSON.stringify(rows)));
                            break;
                        case 'insert':
                            resolve(rows.lastID);
                            break;
                        case 'update':
                        case 'replace':
                        case 'delete':
                            resolve(true);
                            break;
                        default:
                            throw new Error('Query type not match');
                    }
                } else {
                    console.log('Query or database error: ', err);
                    reject();
                }
            });
        } catch (error) {
            reject(new Error(error.message));
        }
    });
};

module.exports = db;