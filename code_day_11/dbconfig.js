const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/userapi")
.then(()=>{
    console.log("db Connected")
})
.catch(()=>{
    console.log("Connection Failed")
})

module.exports = mongoose