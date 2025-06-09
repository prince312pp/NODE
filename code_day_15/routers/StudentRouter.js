const express = require("express")
const router = express.Router()
const StudentController = require("../controllers/StudentController")

router.post("/" ,async (req , res)=>{
    let s = {name:req.body.name,
            age:parseInt(req.body.age),
            city:req.body.city}
        let m = await StudentController.InsertStudent(s)
        res.send({
                    msg : m,
                    data : await StudentController.getStudents()
                })
})

module.exports = router

router.get("/", async (req, res) => {
    const students = await StudentController.getStudents();
    res.send(students);
});

router.get("/:id" , async (req , res) => {
    let id = req.params.id
    const students = await StudentController.getStudentsByID(id)
    res.send({data : students})
})

router.put("/" , async (req , res) => {
     let id = req.body.id
    let s = {name:req.body.name,
              age:parseInt(req.body.age),
              city:req.body.city}
        let m = await StudentController.UpdateStudent(id , s)
        res.send({
                    msg : m,
                    data : await StudentController.getStudents()
                })
})

router.delete("/" , async (req , res) => {
    let id = req.body.id
    let m = await StudentController.DeleteStudent(id)
    res.send({
                    msg : m,
                    data : await StudentController.getStudents()
                })
})