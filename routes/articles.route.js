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
  postComment,
  fileUpload,
} = require('../controllers/articles.controller')
const { protectedContent, adminCheck } = require('../middlewares/verifyToken')
const router = express.Router()

router
  .route('/')
  .get(getAllArticles)
  .post(protectedContent, adminCheck, postArticle)
router.route('/getfirsttwo').get(getFirstTwoArticle)
router.route('/get-eight-articles').get(getEightArticles)
router.route('/get-two-articles-bottom').get(getTWoArticlesBottom)
router.route('/featured-article').get(getFeaturedArticles)

router.route('/:id/comment').post(protectedContent, postComment)
router
  .route('/:id')
  .get(getArticleById)
  .put(protectedContent, updateArticle)
  .delete(protectedContent, adminCheck, deleteArticleById)

module.exports = router
