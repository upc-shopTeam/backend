
const express = require("express");
const productSchema = require("../models/Product")

const router = express.Router()


router.post("/products",(req, res)=>{
    const product = productSchema(req.body);
    product 
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error})); 
});
//get all products

router.get("/products",(req,res)=>{
    productSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error})); 

})

//get by id product
router.get("/products/:id",(req,res)=>{
    const {id}=req.params;
    productSchema
        .findById(req.params.id)
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

