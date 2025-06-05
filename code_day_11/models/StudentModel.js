const mongoose = require("mongoose")
const dbconfig = require("../dbconfig")

let StudentSchema = mongoose.Schema({
    name : String,
    age : Number,
    city : String
})

let studentModel =new mongoose.model("student" , StudentSchema)
module.exports = studentModel