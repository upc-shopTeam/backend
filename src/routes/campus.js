const express = require('express')
const router = express.Router()
const campusController = require('../controllers/campusController')
// get all campus
router.get('/', campusController.getCampus)

// post campus
router.post('/', campusController.addCampus)
router.get('/:id', campusController.getCampusById)
router.get('/:id/products', campusController.getProductsByCampusId)

router.put('/:id', campusController.updateCampus)
router.delete('/:id', campusController.deleteCampus)

module.exports = router
