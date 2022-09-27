const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shopController')

router.get('/', shopController.getShops)
router.post('/', shopController.addShop)
router.get('/:id', shopController.getShopById)
router.get('/:id/campus', shopController.getCampusByShopId)
router.put('/:id', shopController.updateShop)
router.delete('/:id', shopController.deleteShop)

module.exports = router
