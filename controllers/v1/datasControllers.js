const dataQuerys = require("../../services/querys/v1/datasQuerys");
const usersQuerys = require("../../services/querys/v1/usersQuerys");

let datas = {};

datas.getData = async (req, res) => {
    try {
        const payload = req.user;
        if (!payload) {
            return res.status(401).send("Unauthorized");
        };
        const user = await usersQuerys.getUserByEmail(payload.email);
        if (!user) {
            return res.status(404).send("User does not exist");
        }
        const id = user.id;
        if (id !== payload.id) {
            return res.status(401).send("Unauthorized");
        };
        const data = await dataQuerys.getData();
        if (data.length <= 0) {
            return res.status(404).send("Data does not exist");
        };
        const map = new Map();
        const result = [];
        data.forEach(item => {
            item.hijos = [];
            map.set(item.numserie, item);
        });
        data.forEach(item => {
            if (item.padre !== null) {
                const parent = map.get(item.padre);
                if (parent) {
                    parent.hijos.push(item);
                }
            } else {
                result.push(item);
            }
        });
        data.forEach(item => {
            if (item.hijos.length === 0) {
                delete item.hijos;
            }
        });
        return res.status(200).send(result);
    } catch (e) {
        return res.status(500).send(e.message);
    };
};


module.exports = datas;


