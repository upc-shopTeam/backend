const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shopController')

router.get('/', shopController.getShops)
router.post('/', shopController.addShop)
router.get('/:id', shopController.getShopById)
router.get('/:id/campus', shopController.getCampusByShopId)
router.put('/:id', shopController.updateShop)
router.delete('/:id', shopController.deleteShop)

/**
 * @swagger
 * components:
 *   schemas:
 *     shops:
 *       type: object
 *       required:
 *         - name
 *         - ruc
 *         - owner
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the shop
 *         name:
 *           type: string
 *           description: The shop name
 *         ruc:
 *           type: string
 *           description: The ruc shop
 *         owner:
 *           type: string
 *           description: The owner shop
 *       example:
 *         name: El tambo
 *         ruc: asdfaswed
 *         owner: sfdfd233546345
 *
 */
/**
  * @swagger
  * tags:
  *   name: Invoices
  *   description: REST api shops
  */

// Post customers
/**
 * @swagger
 * /api/shop:
 *   post:
 *     summary: Create a new customer
 *     tags: [Shops]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/shop'
 *     responses:
 *       200:
 *         description: Shops was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/shop'
 *       500:
 *         description: Some server error
 */
// get all invoices
/**
 * @swagger
 * /api/shop:
 *   get:
 *     summary: Returns the list of all the shops
 *     tags: [Shops]
 *     responses:
 *       200:
 *         description: The list of the shops
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/shop'
 */
// get by id shops

/**
 * @swagger
 * /api/shop/{id}:
 *   get:
 *     summary: Get the shops by id
 *     tags: [Shop]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Get by shop id
 *     responses:
 *       200:
 *         description: The shop description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/shop'
 *       404:
 *         description: The shops was not found
 */
// update shop

/**
 * @swagger
 * /api/shop/{id}:
 *  put:
 *    summary: Update the shops by the id
 *    tags: [Shop]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The shops id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/shop'
 *    responses:
 *      200:
 *        description: The shops was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/shop'
 *      404:
 *        description: The shops was not found
 *      500:
 *        description: Some error happened
 */
// delete shop

/**
 * @swagger
 * /api/shop/{id}:
 *   delete:
 *     summary: Remove the shops by id
 *     tags: [Shop]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The shops id
 *
 *     responses:
 *      200:
 *        description: The shops was delete
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/shop'
 *      404:
 *        description: The shops was not found
 *      500:
 *        description: Some error happened
 */
module.exports = router
