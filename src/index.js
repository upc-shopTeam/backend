const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config();
const productRoute = require("./routes/product")
const path = require("path")

//swagger
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerSpec = {
    definition: {
        openapi:"3.0.0",
        info:{
            title: "shop-api",
            version: "1.0.0"
        },
        servers: [
            {
                url:"http://localhost:9000"
            }
        ]
    },
    apis:[`${path.join(__dirname,"./routes/*.js")}`]
};

//settings
const app = express()
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json())
app.use("/api",productRoute);
app.use("/api-doc",swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

//routes
app.get("/",(req,res)=>{
    res.send("welcome")
});

//mongodb
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("connected to mongodb"))
    .catch((error)=> console.error(error));

//server listening
app.listen(port,()=>console.log("Server listening to",port));    