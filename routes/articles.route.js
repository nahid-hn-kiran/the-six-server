const express = require('express')
const { postArticle } = require('../controllers/articles.controller')
const { protectedContent } = require('../middlewares/verifyToken')
const router = express.Router()

router.route('/').post(protectedContent, postArticle)

module.exports = router
