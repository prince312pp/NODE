const StudentModel = require("../models/StudentModel")
const mongoose = require("mongoose")

exports.InsertStudent = async (s)=>
{
    let msg = String
    let student = new StudentModel({
        name:s.name,
        age:s.age,
        city:s.city
    })
        await student.save()
        .then(()=> msg = "Student Added")
        .catch(()=> msg = "Error")
        return msg
}

exports.getStudents = async () => {
    const items = await StudentModel.find();
    return items;
};
exports.getStudentsByID = async (id) => {
    const items = await StudentModel.findById(id)
    return items
}
exports.UpdateStudent = async (id , newdata) => {
    msg = String
    await StudentModel.findByIdAndUpdate(id , {$set:newdata})
    .then(()=> msg = "Student Updated")
    .catch(()=> msg = "Error")
    return msg
}
exports.DeleteStudent = async (id) =>{
    msg = String
    await StudentModel.findByIdAndDelete(id)
    .then(()=> msg = "Student Deleted")
    .catch(()=> msg = "Error")
    return msg
}