const dataQuerys = require("../services/querys/datasQuerys");
const usersQuerys = require("../services/querys/usersQuerys");

let datas = {};

datas.getData = async (req, res) => {
    try {
        const payload = req.user;
        if (!payload) {
            return res.status(401).send("Unauthorized");
        };
        const user = await usersQuerys.getUserByEmail(payload.email);
        if (user.length <= 0) {
            return res.status(404).send("User does not exist");
        }
        const id = user[0].id;
        if (id !== payload.id) {
            return res.status(401).send("Unauthorized");
        }
        const data = await dataQuerys.getData()
        if (data.length <= 0) {
            return res.status(404).send("Data does not exist");
        }
        let map = new Map(data.map(item => [item.numserie, item]));
        data.forEach(item => {
            item.hijos = [];
            if (item.padre !== null) {
                let parent = map.get(item.padre);
                if (parent) {
                    parent.hijos.push(item);
                }
            }
        });
        let result = data.filter(item => item.padre === null);
        return res.status(200).send(result);
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

module.exports = datas;


