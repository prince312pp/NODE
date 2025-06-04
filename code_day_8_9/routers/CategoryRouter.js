const express = require("express");
const router = express.Router();

router.get("/" , (req , res) =>{
    res.send(`
            <h3>Welcome to the Catergory Page</h3>
            <h3><a href="/">Go Back to Home</a></h3>
            This is GET Method of Catergory.
            `);
})
router.post("/" , (req , res) =>{
    res.send(`
            <h3>Welcome to the Catergory Page</h3>
            <h3><a href="/">Go Back to Home</a></h3>
            This is POST Method of Catergory.
            `);
})
router.put("/" , (req , res) =>{
    res.send(`
            <h3>Welcome to the Catergory Page</h3>
            <h3><a href="/">Go Back to Home</a></h3>
            This is PUT Method of Product.
            `);
})
router.delete("/" , (req , res) =>{
    res.send(`
            <h3>Welcome to the Product Page</h3>
            <h3><a href="/">Go Back to Home</a></h3>
            This is DELETE Method of Catergory.
            `);
})

module.exports = router 