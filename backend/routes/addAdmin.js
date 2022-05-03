const express = require("express")
const authAdmin = require("../middleware/authAdmin")
const { User } = require("../models/user")

const router = express.Router()

router.post("/", authAdmin, async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email })
    try {
        if (!user) { res.status(400).send("user is not found"); return; }
        if (user.role === "admin") {
            res.status(400).send("already admin");
            return;
        }

        user.role = "admin"
        await user.save()

        res.status(200).send("added as admin")
    } catch (err) {
        console.log(err.message)
    }




})
module.exports = router