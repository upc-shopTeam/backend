const express = require('express')
const router = express.Router()
const invoiceController = require('../controllers/invoiceController')
router.get('/', invoiceController.getInvoice)
router.get('/:id/invoiceItems', invoiceController.getInvoiceItemsByInvoiceId)

router.post('/', invoiceController.addInvoice)
router.get('/:id', invoiceController.getInvoiceById)

router.put('/:id', invoiceController.updateInvoice)
router.delete('/:id', invoiceController.deleteInvoice)

/**
 * @swagger
 * components:
 *   schemas:
 *     invoices:
 *       type: object
 *       required:
 *         - date
 *         - customer
 *         - employee
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the customer
 *         customer:
 *           type: string
 *           description: The customer id
 *         employee:
 *           type: string
 *           description: The employee id
 *       example:
 *         date: 22/06/2022
 *         customer: uida13s3ds2
 *         employee: isddasd1312
 *
 *
 */
/**
  * @swagger
  * tags:
  *   name: Invoices
  *   description: REST api invoices
  */

// Post customers
/**
 * @swagger
 * /api/invoices:
 *   post:
 *     summary: Create a new customer
 *     tags: [Invoices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/invoices'
 *     responses:
 *       200:
 *         description: Invoices was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/invoices'
 *       500:
 *         description: Some server error
 */
// get all invoices
/**
 * @swagger
 * /api/invoices:
 *   get:
 *     summary: Returns the list of all the invoices
 *     tags: [Invoices]
 *     responses:
 *       200:
 *         description: The list of the invoices
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/invoices'
 */
// get by id customer

/**
 * @swagger
 * /api/invoices/{id}:
 *   get:
 *     summary: Get the invoices by id
 *     tags: [Invoices]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Get by invoice id
 *     responses:
 *       200:
 *         description: The invoice description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/invoices'
 *       404:
 *         description: The customer was not found
 */
// update invoices

/**
 * @swagger
 * /api/invoices/{id}:
 *  put:
 *    summary: Update the invoices by the id
 *    tags: [Invoices]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The invoices id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/invoices'
 *    responses:
 *      200:
 *        description: The invoices was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/invoices'
 *      404:
 *        description: The invoices was not found
 *      500:
 *        description: Some error happened
 */
// delete invoices

/**
 * @swagger
 * /api/invoices/{id}:
 *   delete:
 *     summary: Remove the invoices by id
 *     tags: [Invoices]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The invoices id
 *
 *     responses:
 *      200:
 *        description: The invoices was delete
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/invoices'
 *      404:
 *        description: The invoices was not found
 *      500:
 *        description: Some error happened
 */

module.exports = router
