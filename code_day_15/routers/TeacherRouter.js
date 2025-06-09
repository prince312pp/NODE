const express = require("express")
const router = express.Router()
const TeacherController = require("../controllers/TeacherController")

router.post("/" ,async (req , res)=>{
    let t = {name:req.body.name,
            age:parseInt(req.body.age),
            city:req.body.city}
            let m = await TeacherController.InsertTeacher(t)
        res.send({
            msg : m,
            data : await TeacherController.getTeachers()
        })
})

router.get("/", async (req, res) => {
    const teachers = await TeacherController.getTeachers();
    res.send(teachers);
});

router.get("/:id" , async (req , res) => {
    let id = req.params.id
    const teachers = await TeacherController.getTeachersByID(id)
    res.send({data : teachers})
})

router.put("/" , async (req , res) => {
     let id = req.body.id
    let s = {name:req.body.name,
              age:parseInt(req.body.age),
              city:req.body.city}
        let m = await TeacherController.UpdateTeacher(id , s)
        res.send({
                    msg : m,
                    data : await TeacherController.getTeachers()
                })
})

router.delete("/" , async (req , res) => {
    let id = req.body.id
    let m = await TeacherController.DeleteTeacher(id)
    res.send({
                    msg : m,
                    data : await TeacherController.getTeachers()
                })
})

module.exports = router