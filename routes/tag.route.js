const express = require('express')
const router = express.Router()
const tagController = require('../controllers/tag.controller')
const { protectedContent, adminCheck } = require('../middlewares/verifyToken')

router
  .route('/')
  .get(tagController.getTagsController)
  .post(protectedContent, adminCheck, tagController.addTagController)

router
  .route('/:id')
  .put(protectedContent, adminCheck, tagController.updateTagController)
  .delete(protectedContent, adminCheck, tagController.deleteTagController)

module.exports = router
