const express = require('express')
const router = express.Router()
const ownerController = require('../controllers/ownerController')
// get all owner
router.get('/', ownerController.getOwner)

// post owner
router.post('/sign-up', ownerController.addOwner)
router.get('/:id', ownerController.getOwnerById)
router.put('/:id', ownerController.updateOwner)
router.delete('/:id', ownerController.deleteOwner)
router.get('/:id/products', ownerController.getProductsbyOwnerId)
router.get('/:id/invoices', ownerController.getInvoicesByOwnerId)
router.get('/:id/employees', ownerController.getEmployeeByOwnerId)

module.exports = router
