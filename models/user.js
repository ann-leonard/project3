const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema
const btoa = require('btoa')

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

/*

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
    console.log('pswd checker')
    try{
        console.log(newPassword)
        console.log(this.password)
        return bcrypt.compare(newPassword, this.password).then(function(res){
            console.log(res)
        })
        
    }catch(err){
        throw new Error(err);
    }
}
*/

function encode(pswd){
    const encode1 = btoa(pswd)
    const encode2 = btoa(encode1)
    return encode2
}

userSchema.pre('save', async function(next){
    try{
        const passwordHash = await encode(this.password)
        //assign hashed password to password
        this.password = passwordHash
    }catch(err){
        next(err)
    }
})

userSchema.methods.isValidPassword = async function(newPassword){
    try{
       newPassword = await encode(newPassword)
       const pswdValidator = this.password == newPassword ? true : false;
       console.log(pswdValidator)
       return pswdValidator
    }catch(err){
        throw new Error(err)
    }
}



const User = mongoose.model('user', userSchema)
module.exports = User