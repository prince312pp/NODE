const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController")


router.get("/", (req, res) => {
    let users = UserController.getusers()
    res.send(users)
})

router.get("/:id" , (req,res)=>{
    let id = req.params.id
    res.send(UserController.display_by_id(id))

})

router.post("/", (req, res) => {
    // let array = user
    let id =4
    id++
    let user = {
        id:id,
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact,
    }
    UserController.adduser(user)
    res.send({
        message: "User Added", 
        data : UserController.getusers()
    })
})
router.put("/", (req, res) => {
        let id = req.body.id; 
        let user = {
        id:req.body.id,
        name:req.body.name,
        contact:req.body.contact,
        email:req.body.email
    }
    UserController.updateuser(id , user)
        res.send(`updated`)

})

router.delete("/", (req, res) => {
      // delete by id  req.body.id ,
    //find index of element from array whose id is  givenid 
    //use splice method of js array
    UserController.deleteuser(parseInt(req.body.id))
    res.send("Deleted")
})


module.exports = router