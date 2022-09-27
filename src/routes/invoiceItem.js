const express = require('express')
const router = express.Router()
const invoiceItemController = require('../controllers/invoiceItemController')
// get all campus
router.get('/', invoiceItemController.getInvoiceItem)

// post campus
router.post('/', invoiceItemController.addInvoiceItem)
router.get('/:id', invoiceItemController.getInvoiceItemById)

router.put('/:id', invoiceItemController.updateInvoiceItem)
router.delete('/:id', invoiceItemController.deleteInvoiceItem)

module.exports = router
