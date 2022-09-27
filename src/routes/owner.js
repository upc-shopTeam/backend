const express = require('express')
const router = express.Router()
const ownerController = require('../controllers/ownerController')
// get all owner
router.get('/', ownerController.getOwner)

// post owner
router.post('/', ownerController.addOwner)
router.get('/:id', ownerController.getOwnerById)
router.get('/:id/shop', ownerController.getShopByOwnerId)
router.put('/:id', ownerController.updateOwner)
router.delete('/:id', ownerController.deleteOwner)

module.exports = router
