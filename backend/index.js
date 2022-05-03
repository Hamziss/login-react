const express = require("express");
const colors = require("colors");
require("dotenv").config();
const cors = require("cors")
const path = require("path")
const signUp = require("./routes/signUp")
const signIn = require("./routes/signIn")
const addAdmin = require("./routes/addAdmin")
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
app.use("/api/admin/add", addAdmin)

//deployment
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))

    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, '../', 'client', 'build', 'index.html')
        )
    )
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}

app.get("/", (req, res) => {
    res.send("API is working")
})

app.listen(port, () => {
    console.log(`Server is started at PORT ${port}`)
})