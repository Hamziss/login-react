const Joi = require("joi");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const express = require("express")
const { User } = require("../models/user")

const router = express.Router()

router.post("/", async(req, res) => {
    const schema = Joi.object({
        email: Joi.string().min(3).max(200).email().required(),
        password: Joi.string().min(6).max(200).required()
    })
    const { error } = schema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    try {
        let user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(400).send("Invalid email or password...");

        const validpassword = await bcrypt.compare(req.body.password, user.password)
        if (!validpassword)
            return res.status(400).send("Invalid email or password...");

        const secret_key = process.env.SECRET_KEY


        const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, secret_key)
        res.send(token)


    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
})

module.exports = router