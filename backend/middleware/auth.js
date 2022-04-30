const jwt = require("jsonwebtoken")

function auth(req, res, next) {
    const token = req.header("x-auth-token")
    if (!token) return res.status(401).send("Not authorized... ")
    res.send(token)
    try {
        const secret_key = process.env.SECRET_KEY;
        const payload = jwt.verify(token, secret_key);

        req.user = payload;
        next();
    } catch (err) {
        res.status(400).send("Invalid token")
    }
}

module.exports = auth