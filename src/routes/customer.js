const express = require('express')
const customerController = require('../controllers/customerController')
const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     customers:
 *       type: object
 *       required:
 *         - firsName
 *         - lastName
 *         - email
 *         - photo
 *         - numberPhone
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the customer
 *         firstName:
 *           type: string
 *           description: The customer first name
 *         lastName:
 *           type: string
 *           description: The customer last name
 *         email:
 *           type: string
 *           description: The customer email
 *         photo:
 *           type: string
 *           description: The customer photo
 *         numberPhone:
 *           type: string
 *           description: The customer number phone
 *       example:
 *         firstName: Pedro
 *         lastName: Raraz
 *         email: pedro@gmail.com
 *         photo: www.image.com
 *         numberPhone: 98745841
 *
 *
 */
/**
  * @swagger
  * tags:
  *   name: Customers
  *   description: REST api customers
  */

// Post customers
/**
 * @swagger
 * /api/customers:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/customers'
 *     responses:
 *       200:
 *         description: Customers was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/customers'
 *       500:
 *         description: Some server error
 */

router.post('/', customerController.addCustomer)
// get all customers
/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Returns the list of all the customers
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: The list of the customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/customers'
 */
router.get('/', customerController.getCustomer)

// get by id customer

/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     summary: Get the customer by id
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Get by customer id
 *     responses:
 *       200:
 *         description: The book description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/customers'
 *       404:
 *         description: The customer was not found
 */
router.get('/:id', customerController.getCustomerById)

// update customer

/**
 * @swagger
 * /api/customers/{id}:
 *  put:
 *    summary: Update the customer by the id
 *    tags: [Customers]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The customer id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/customers'
 *    responses:
 *      200:
 *        description: The customer was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/customers'
 *      404:
 *        description: The customer was not found
 *      500:
 *        description: Some error happened
 */
router.put('/:id', customerController.updateCustomer)

// delete customer

/**
 * @swagger
 * /api/customers/{id}:
 *   delete:
 *     summary: Remove the customers by id
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The customer id
 *
 *     responses:
 *      200:
 *        description: The customer was delete
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/customers'
 *      404:
 *        description: The customer was not found
 *      500:
 *        description: Some error happened
 */
router.delete('/:id', customerController.deleteCustomer)

router.get('/:id/invoices', customerController.getInvoicesByCustomerId)

module.exports = router
