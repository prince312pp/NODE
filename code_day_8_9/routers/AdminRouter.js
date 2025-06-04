const express = require("express");
const router = express.Router();

router.get("/" , (req , res) =>{
    res.send(`
            <h3>Welcome to the Admin Page</h3>
            <h3><a href="/">Go Back to Home</a></h3>
            This is GET Method of Admin.
            `);
})
router.post("/" , (req , res) =>{
    res.send(`
            <h3>Welcome to the Admin Page</h3>
            <h3><a href="/">Go Back to Home</a></h3>
            This is POST Method of Admin.
            `);
})
router.put("/" , (req , res) =>{
    res.send(`
            <h3>Welcome to the Admin Page</h3>
            <h3><a href="/">Go Back to Home</a></h3>
            This is PUT Method of Admin.
            `);
})
router.delete("/" , (req , res) =>{
    res.send(`
            <h3>Welcome to the Admin Page</h3>
            <h3><a href="/">Go Back to Home</a></h3>
            This is DELETE Method of Admin.
            `);
})

module.exports = router