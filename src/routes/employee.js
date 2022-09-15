const express = require("express");
const employeeSchema = require("../models/Employee")

const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     employees:
 *       type: object
 *       required:
 *         - firsName
 *         - lastName
 *         - email
 *         - hireDate
 *         - photo
 *         - numberPhone
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the employee
 *         firstName:
 *           type: string
 *           description: The employee first name
 *         lastName:
 *           type: string
 *           description: The employee last name
 *         email:
 *           type: string
 *           description: The employee email
 *         hireDate:
 *           type: string
 *           description: The employee hire date
 *         photo:
 *           type: string
 *           description: The employee photo
 *         numberPhone:
 *           type: string
 *           description: The employee number phone
 *       example:
 *         firstName: Juan
 *         lastName: Perez
 *         email: juan@gmail.com
 *         hireDate: 05/01/2021
 *         photo: www.image.com
 *         numberPhone: 988471525
 *        
 *           
 */
 /**
  * @swagger
  * tags:
  *   name: Employees
  *   description: REST api employees
  */ 

 //Post employees
 /**
 * @swagger
 * /api/employees:
 *   post:
 *     summary: Create a new employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/employees'
 *     responses:
 *       200:
 *         description: Employee was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/employees'
 *       500:
 *         description: Some server error
 */

router.post("/employees",(req, res)=>{
    const employee = employeeSchema(req.body);
    employee 
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error})); 
});
//get all employees
/**
 * @swagger
 * /api/employees:
 *   get:
 *     summary: Returns the list of all the employees
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: The list of the employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/employees'
 */
router.get("/employees",(req,res)=>{
    employeeSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error})); 

})

//get by id employee

/**
 * @swagger
 * /api/employees/{id}:
 *   get:
 *     summary: Get the employee by id
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Get by employee id
 *     responses:
 *       200:
 *         description: The book description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/employees'
 *       404:
 *         description: The book was not found
 */
router.get("/employees/:id",(req,res)=>{
    const {id}=req.params;
    employeeSchema
        .findById(req.params.id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
});


//update employee

/**
 * @swagger
 * /api/employees/{id}:
 *  put:
 *    summary: Update the employee by the id
 *    tags: [Employees]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The employee id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/employees'
 *    responses:
 *      200:
 *        description: The employee was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/employees'
 *      404:
 *        description: The employees was not found
 *      500:
 *        description: Some error happened
 */
router.put("/employees/:id",(req,res)=>{
    const{id}=req.params
    const { firstName,lastName,hireDate,photo,numberPhone} =req.body
    employeeSchema
        .updateOne({_id:id},{$set:{firstName,lastName,hireDate,photo,numberPhone}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
});

//delete employee

/**
 * @swagger
 * /api/employees/{id}:
 *   delete:
 *     summary: Remove the employees by id
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The employee id
 * 
 *     responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/employees'
 *      404:
 *        description: The product was not found
 *      500:
 *        description: Some error happened
 */
router.delete("/employees/:id",(req,res)=>{
    const{id}=req.params
    employeeSchema
        .remove()
        .then((data)=>res.json(data))
        .catch((error)=> res.json({message:error}))
});
module.exports=router;

