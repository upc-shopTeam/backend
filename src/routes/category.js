const express = require('express')
const passport = require('passport')
const router = express.Router()
const categoryController = require('../controllers/categoryController')
const { checkRoles } = require('../middlewares/auth.handler')
router.get('/', categoryController.getCategories)

router.post('/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  categoryController.addCategory)
router.get('/:id', categoryController.getCategoryById)
router.get('/:id/products', categoryController.getProductsByCategoryId)

router.put('/:id', categoryController.updateCategory)
router.delete('/:id', categoryController.deleteCategory)

module.exports = router
