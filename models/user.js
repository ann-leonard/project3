const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

//Database User schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true},
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', async function(next){
    try{
        //generate salt + hash
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(this.password, salt)
        //assign hashed password to password
        this.password = passwordHash
    }catch(err){
        next(err)
    }
})

userSchema.methods.isValidPassword = async function(newPassword){
    try{
       return await bcrypt.compare(newPassword, this.password)
    }catch(err){
        throw new Error(err);
    }
}

const User = mongoose.model('user', userSchema)
module.exports = User