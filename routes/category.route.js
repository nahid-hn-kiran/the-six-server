const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/category.controller')

router
  .route('/')
  .get(categoryController.getCategoriesController)
  .post(categoryController.addCategoryController)

router
  .route('/:id')
  .put(categoryController.updateCategoryController)
  .delete(categoryController.deleteCategoryController)

module.exports = router
