const express = require('express')
const {
  postArticle,
  updateArticle,
  deleteArticleById,
  getAllArticles,
  getArticleById,
} = require('../controllers/articles.controller')
const { protectedContent } = require('../middlewares/verifyToken')
const router = express.Router()

router.route('/').get(getAllArticles).post(protectedContent, postArticle)

router
  .route('/:id')
  .get(getArticleById)
  .put(protectedContent, updateArticle)
  .delete(protectedContent, deleteArticleById)

module.exports = router
