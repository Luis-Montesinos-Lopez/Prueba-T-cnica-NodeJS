const pc = require('picocolors')
const verifyToken = require('./verifyToken');
const verifyTokenMiddleware = async (req, res, next) => {
    console.log(pc.green('Verifying token...'));
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send("No autorizado");
    };
    try {
        const payload = await verifyToken(authorization);
        req.user = payload;
        next();
    } catch (e) {
        return res.status(401).send("Token no válido");
    };
}

module.exports = verifyTokenMiddleware;
