const express = require('express')
const {
  postArticle,
  updateArticle,
  deleteArticleById,
  getAllArticles,
  getArticleById,
  getFirstTwoArticle,
  getEightArticles,
  getTWoArticlesBottom,
  getFeaturedArticles,
} = require('../controllers/articles.controller')
const { protectedContent } = require('../middlewares/verifyToken')
const router = express.Router()

router.route('/').get(getAllArticles).post(protectedContent, postArticle)
router.route('/getfirsttwo').get(getFirstTwoArticle)
router.route('/get-eight-articles').get(getEightArticles)
router.route('/get-two-articles-bottom').get(getTWoArticlesBottom)
router.route('/featured-article').get(getFeaturedArticles)

router
  .route('/:id')
  .get(getArticleById)
  .put(protectedContent, updateArticle)
  .delete(protectedContent, deleteArticleById)

module.exports = router
