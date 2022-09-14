const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config();
const productRoute = require("./routes/product")

//settings
const app = express()
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json())
app.use("/api",productRoute);

//routes
app.get("/",(req,res)=>{
    res.send("connected")
});

//mongodb
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("connected to mongodb"))
    .catch((error)=> console.error(error));

//server listening
app.listen(port,()=>console.log("Server listening to",port));    