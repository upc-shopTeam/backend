const express = require("express");
const productSchema = require("../models/Product")

const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     products:
 *       type: object
 *       required:
 *         - name
 *         - img
 *         - price
 *         - stock
 *         - category
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the product
 *         name:
 *           type: string
 *           description: The product name
 *         img:
 *           type: string
 *           description: The product image
 *         price:
 *           type: number
 *           description: The product price
 *         stock:
 *           type: number
 *           description: The product stock
 *       example:
 *         name: Glass
 *         img: www.image.com
 *         price: 30
 *         stock: 10
 *           
 */
 /**
  * @swagger
  * tags:
  *   name: Products
  *   description: REST api products
  */ 

 //Post product
 /**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/products'
 *     responses:
 *       200:
 *         description: Product was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/products'
 *       500:
 *         description: Some server error
 */

router.post("/products",(req, res)=>{
    const product = productSchema(req.body);
    product 
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error})); 
});
//get all products
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/products'
 */
router.get("/products",(req,res)=>{
    productSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error})); 

})

//get by id product

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get the Product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Get by product id
 *     responses:
 *       200:
 *         description: The book description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/products'
 *       404:
 *         description: The book was not found
 */
router.get("/products/:id",(req,res)=>{
    const {id}=req.params;
    productSchema
        .findById(req.params.id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
});


//update Product

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *    summary: Update the product by the id
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The products id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/products'
 *    responses:
 *      200:
 *        description: The product was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/products'
 *      404:
 *        description: The products was not found
 *      500:
 *        description: Some error happened
 */
router.put("/products/:id",(req,res)=>{
    const{id}=req.params
    const { name,img,price,stock} =req.body
    productSchema
        .updateOne({_id:id},{$set:{name,img,price,stock}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
});

//delete product

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Remove the products by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 * 
 *     responses:
 *      200:
 *        description: The products was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/products'
 *      404:
 *        description: The product was not found
 *      500:
 *        description: Some error happened
 */
router.delete("/products/:id",(req,res)=>{
    const{id}=req.params
    productSchema
        .remove()
        .then((data)=>res.json(data))
        .catch((error)=> res.json({message:error}))
});
module.exports=router;

