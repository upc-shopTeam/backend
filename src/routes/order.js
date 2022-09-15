const express = require("express");
const orderSchema = require("../models/Order")

const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     orders:
 *       type: object
 *       required:
 *         - customerId
 *         - employeeId
 *         - orderDate
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the employee
 *         customerId:
 *           type: string
 *           description: The order customer Id
 *         employeeId:
 *           type: string
 *           description: The order employeeId
 *         orderDate:
 *           type: string
 *           description: The order Date
 *         description:
 *           type: string
 *           description: The order description
 *       example:
 *         customerId: awqs123
 *         employeeId: sewr132
 *         orderDate: 02/07/2021
 *         description: lorem lore ds lore a releos
 *        
 *           
 */

 /**
  * @swagger
  * tags:
  *   name: Orders
  *   description: REST api orders
  */ 

 //Post orders
 /**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/orders'
 *     responses:
 *       200:
 *         description: Order was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/orders'
 *       500:
 *         description: Some server error
 */

router.post("/orders",(req, res)=>{
    const order = orderSchema(req.body);
    order 
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error})); 
});
//get all orders
/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Returns the list of all the orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: The list of the orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/orders'
 */
router.get("/orders",(req,res)=>{
    orderSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error})); 

})

//get by id order

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Get the order by id
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Get by order id
 *     responses:
 *       200:
 *         description: The order description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/orders'
 *       404:
 *         description: The order was not found
 */
router.get("/orders/:id",(req,res)=>{
    const {id}=req.params;
    orderSchema
        .findById(req.params.id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
});


//update order

/**
 * @swagger
 * /api/orders/{id}:
 *  put:
 *    summary: Update the order by the id
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The order id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/orders'
 *    responses:
 *      200:
 *        description: The order was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/orders'
 *      404:
 *        description: The orders was not found
 *      500:
 *        description: Some error happened
 */
router.put("/orders/:id",(req,res)=>{
    const{id}=req.params
    const { customerId,employeeId,orderDate,description} =req.body
    orderSchema
        .updateOne({_id:id},{$set:{customerId,employeeId,orderDate,description}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
});

//delete orders

/**
 * @swagger
 * /api/orders/{id}:
 *   delete:
 *     summary: Remove the orders by id
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The order id
 * 
 *     responses:
 *      200:
 *        description: The order was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/orders'
 *      404:
 *        description: The order was not found
 *      500:
 *        description: Some error happened
 */
router.delete("/orders/:id",(req,res)=>{
    const{id}=req.params
    orderSchema
        .remove()
        .then((data)=>res.json(data))
        .catch((error)=> res.json({message:error}))
});
module.exports=router;

