const express = require('express')
const router = express.Router()
const newsLetterController = require('../controllers/newsletter.controller')
const { protectedContent, adminCheck } = require('../middlewares/verifyToken')

router
  .route('/')
  .get(newsLetterController.getSubscribersController)
  .post(
    protectedContent,
    adminCheck,
    newsLetterController.subscribeNewsletterController
  )

router
  .route('/:id/unsubscribe')
  .delete(
    protectedContent,
    adminCheck,
    newsLetterController.unSubscribeNewsletterController
  )

module.exports = router
