const express = require('express')
const router = express.Router()
const saleController = require('../controllers/saleController')
router.post('/:id', saleController.createSale)
module.exports = router
