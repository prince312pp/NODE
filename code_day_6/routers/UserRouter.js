const express = require("express");
const router = express.Router();
var users = [
    {
        id : 1,
        name : "Akash",
        email : "akash123@gmail.com",
        contact : "123456890"
    },
    {
        "id" : 2,
        "name" : "John",
        "email" : "john34@gmail.com",
        "contact" : "123456890"
    },
    {
        "id" : 3,
        "name" : "Vardaan",
        "email" : "vardaan654@gmail.com",
        "contact" : "123456890"
    },
    {
        "id" : 4,
        "name" : "Parth",
        "email" : "parth82 @gmail.com",
        "contact" : "123456890"
    },
]
var id = 4;

router.get("/", (req, res) => {
    res.send(users)
})

router.post("/", (req, res) => {
    // let array = user
    id++
    let user = {
        "id":id, 
        "name" : req.body.name,
        "email" : req.body.email,
        "contact":req.body.contact}
        users.push(user);
        res.send("useradded")
})
router.put("/", (req, res) => {

    // update by id  req.body.id ,
    //find index of element from array whose id is  givenid 
    //users[id].name = newname 
        let i = req.body.id
        users[i] = {
        "id":parseInt(i)+1, 
        "name" : req.body.name,
        "email" : req.body.email,
        "contact":req.body.contact}
        res.send(`updated`)

})

router.delete("/", (req, res) => {
      // delete by id  req.body.id ,
    //find index of element from array whose id is  givenid 
    //use splice method of js array

})


module.exports = router