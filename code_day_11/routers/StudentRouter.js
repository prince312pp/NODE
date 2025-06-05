const express = require("express")
const router = express.Router()
const StudentController = require("../controllers/StudentController")

router.post("/" , (req , res)=>{
    let s = {name:req.body.name,
            age:parseInt(req.body.age),
            city:req.body.city}
        studentController.insertStudent(s)
        res.send("Student Added")
})

module.exports = router