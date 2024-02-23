const {jwtVerify } = require("jose");

const verifyToken = async (authorization) => {
    try {
        const token = authorization.split(" ")[1];
        const encoder = new TextEncoder();
        const { payload } = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
        );
        return payload;
    } catch (e) {
        throw new Error(e.message);
    };
};

module.exports = verifyToken;