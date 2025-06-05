const express = require("express")
const app = express();
const dbconfig = require("./dbconfig")
const UserRouter = require("./routers/UserRouter");
const AdminRouter = require("./routers/AdminRouter")
const ProductRouter = require("./routers/ProductRouter")
const CategoryRouter = require("./routers/CategoryRouter")
const StudentRouter = require("./routers/StudentRouter")
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use("/user",UserRouter);
app.use("/admin" , AdminRouter)
app.use("/products" , ProductRouter)
app.use("/category" , CategoryRouter)
app.use("/student" , StudentRouter)

app.get("/", (req, res) => {
  res.send(` <h3><a href = "/user">User</a></h3> 
             <h3><a href = "/admin">Admin</a></h3> 
             <h3><a href = "/category">Category</h3></a>
             <h3><a href = "/products">Products</a></h3>` );
})

app.listen(8080 , () => {
  console.log("server is running on port 8080");
  console.log("http://localhost:8080");
})

