const pc = require("picocolors")
const verifyToken = require("./verifyToken");

const verifyTokenMiddleware = async (req, res, next) => {
    console.log(pc.green("Verifying token..."));
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send("Unauthorized");
    };
    try {
        const payload = await verifyToken(authorization);
        req.user = payload;
        next();
    } catch (e) {
        return res.status(401).send("Invalid token");
    };
}

module.exports = verifyTokenMiddleware;
