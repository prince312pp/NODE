const StudentModel = require("../models/StudentModel")

exports.InsertStudent = (s)=>
{
    let student = new studentModel({
        name:s.name,
        age:s.age,
        city:s.city
    })
    student.save()
}