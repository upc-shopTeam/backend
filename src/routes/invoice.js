const express = require('express')
const router = express.Router()
const invoiceController = require('../controllers/invoiceController')
router.get('/', invoiceController.getInvoice)
router.get('/:id/invoiceItems', invoiceController.getInvoiceItemsByInvoiceId)

router.post('/', invoiceController.addInvoice)
router.get('/:id', invoiceController.getInvoiceById)

router.put('/:id', invoiceController.updateInvoice)
router.delete('/:id', invoiceController.deleteInvoice)

module.exports = router
