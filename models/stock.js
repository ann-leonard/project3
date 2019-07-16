const mongoose = require('mongoose');
const Schema = mongoose.Schema

const stockSchema = new Schema({
    symbol: {
        required:true,
        type:String
    },
    timestamp: {
        required:true,
        type:Date,
    },
    high: {
        required:true,
        type: Number   
    },
    low: {
        required:true,
        type:Number
    },
    open:{
        required:true,
        type:Number
    },
    close:{
        required:true,
        type:Number
    },
    volume:{
        required:true,
        type:Number
    }
})

const Stock = mongoose.model('stock', stockSchema)
module.exports = Stock