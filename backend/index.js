const express = require("express");
const colors = require("colors");
require("dotenv").config();
const cors = require("cors")

const signUp = require("./routes/signUp")
const signIn = require("./routes/signIn")
const connectDB = require("./config/db")
const port = process.env.PORT || 5000

//connecting to mongodb
connectDB();

//setting up express server 
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/signup", signUp)
app.use("/api/signin", signIn)

app.get("/", (req, res) => {
    res.send("API is working")
})

app.listen(port, () => {
    console.log(`Server is started at PORT ${port}`)
})