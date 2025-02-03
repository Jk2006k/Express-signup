const mongoose = require('mongoose')


const connectDB = () =>{
    try {
        mongoose.connect('mongodb+srv://kishoore004:Siva%405@jk.itech.mongodb.net/express')
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectDB;



