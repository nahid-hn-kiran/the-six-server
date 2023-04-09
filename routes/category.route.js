const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/category.controller')
const { protectedContent, adminCheck } = require('../middlewares/verifyToken')

router
  .route('/')
  .get(categoryController.getCategoriesController)
  .post(protectedContent, adminCheck, categoryController.addCategoryController)

router
  .route('/:id')
  .put(
    protectedContent,
    adminCheck,
    categoryController.updateCategoryController
  )
  .delete(
    protectedContent,
    adminCheck,
    categoryController.deleteCategoryController
  )

module.exports = router
