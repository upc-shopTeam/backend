const express = require("express")
const productSchema = require("./models/product")

const router = express.Router()

//create product
router.post("/products",(req, res)=>{
    const product = productSchema(req.body);
    user 
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error})); 
});
//get all products
router.get("users",(req,res)=>{
    productSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error})); 

})

//get by id product
router.get("products/:id",(req,res)=>{
    const {id}=req.params;
    productSchema
        .findById()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
});

//delete product
router.delete("/products/:id",(req,res)=>{
    const{id}=req.params
    productSchema
        .remove()
        .then((data)=>res.json(data))
        .catch((error)=> res.json({message:error}))
});
//update Product
router.put("/products/:id",(req,res)=>{
    const{id}=req.params
    const { name,img,price,stock} =req.body
    productSchema
        .updateOne({_id:id},{$set:{name,img,price,stock}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
});

module.exports=router;

