const mongoose = require("mongoose")
const dbconfig = require("../dbconfig")

let TeacherSchema = mongoose.Schema({
    name : String,
    age : Number,
    city : String
})

let TeacherModel = new mongoose.model("teacher" , TeacherSchema)
module.exports = TeacherModel