const JWT = require('jsonwebtoken')
const User = require("../models/user")
const { JWT_SECRET } = require("../config/index")

signToken = (newUser) => {
    return token = JWT.sign({
        iss:'Ann Leonard',
        sub: newUser.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET)
}

module.exports = {
    signup: async (req,res,next) =>{
        //get user email and password
        console.log("signup function called!")
        const {email,password} = req.value.body

        //check for duplicates before saving
        const existingUser = await User.findOne({email})
        if (existingUser){
            return res.status(403).json({error:"email already in use"})
        }

        //save new user to database 
        const newUser = new User({email,password})
        await newUser.save()

        //generate token
        const token = signToken(newUser)
        //respond with token
        return res.status(200).json({token})
    },
    signin: async (req,res,next)=>{
        //generate token
        console.log('logged in')
    },
    secret: async (req,res,next)=>{
        console.log("secret function called!")
    }
}