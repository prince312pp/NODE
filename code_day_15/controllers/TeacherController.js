const TeacherModel = require("../models/TeacherModel")

exports.InsertTeacher = async (t)=>{
    let msg = String    
    let teacher = new TeacherModel({
        name:t.name,
        age:t.age,
        city:t.city
        })
        await teacher.save()
        .then(()=> msg = "Teacher Added")
        .catch(()=> msg = "Error")
        return msg

}

exports.getTeachers = async () => {
    const items = await TeacherModel.find();
    return items;
};

exports.getTeachersByID = async (id) => {
    const items = await TeacherModel.findById(id)
    return items
}
exports.UpdateTeacher = async (id , newdata) => {
    msg = String
    await TeacherModel.findByIdAndUpdate(id , {$set:newdata})
    .then(()=> msg = "Teacher Updated")
    .catch(()=> msg = "Error")
    return msg
}
exports.DeleteTeacher = async (id) =>{
    msg = String
    await TeacherModel.findByIdAndDelete(id)
    .then(()=> msg = "Teacher Deleted")
    .catch(()=> msg = "Error")
    return msg
}