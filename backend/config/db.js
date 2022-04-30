const mongoose = require("mongoose")


const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.bgGreen.bold)
    } catch (error) {
        console.log("Connection to MongoDB failed :", error.message.bold.bgRed)

        process.exit(1)
    }
}

module.exports = connectDB