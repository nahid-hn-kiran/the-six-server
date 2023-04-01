const express = require('express')
const router = express.Router()
const tagController = require('../controllers/tag.controller')

router
  .route('/')
  .get(tagController.getTagsController)
  .post(tagController.addTagController)

router
  .route('/:id')
  .put(tagController.updateTagController)
  .delete(tagController.deleteTagController)

module.exports = router
