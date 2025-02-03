const User  = require('../models/userModels')

const signUp = async (req, res) =>{
    try {
        console.log(req.body)
        const {username, email, password, dateOfBirth} = req.body
        if (username.trim() == ""){
            res.status(400).json({success: false, msg: "Username Cannot be Empty"})
        }
        if (email.trim() == ""){
            res.status(400).json({success: false, msg: "Username Cannot be Empty"})
        }
        if (password.length < 8 || password.length > 16){
            res.status(400).json({success: false, msg: "Password length should be greater than 8 or less than or equal to 16"})
        }
        const newUser = User({username, email, password, dateOfBirth})
        await newUser.save()
        res.status(201).json({success: true, msg: "User Created Successfully"})
    } catch (error) {
        res.status(500).json({success: false, msg: "Internal Server Error", desc: error.message})
    }
}

module.exports = signUp;