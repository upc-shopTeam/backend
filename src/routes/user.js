const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
// get all campus
router.get('/', userController.getUser)

// post campus
router.post('/', userController.addUser)
router.get('/:id', userController.getUserById)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router
