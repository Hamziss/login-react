const jwt = require("jsonwebtoken")
require("dotenv").config();
const { User } = require("../models/user")

async function authAdmin(req, res, next) {
    const token = req.header("x-auth-token")
    if (!token) return res.status(401).send("Access denied. not authorized.. ")

    try {
        const secret_key = process.env.SECRET_KEY;
        const payload = jwt.verify(token, secret_key)

        const admin = await User.findOne({ _id: payload._id, role: "admin" })

        if (!admin) return res.status(400).send("no accesss. u are not an admin")

        req.user = payload;
        next();
    } catch (err) {
        console.log(err)
        res.status(400).send("Invalid token")
    }
}

module.exports = authAdmin