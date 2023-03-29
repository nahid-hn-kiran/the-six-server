const express = require('express')
const router = express.Router()
const newsLetterController = require('../controllers/newsletter.controller')

router
  .route('/')
  .get(newsLetterController.getSubscribersController)
  .post(newsLetterController.subscribeNewsletterController)

router
  .route('/:id/unsubscribe')
  .delete(newsLetterController.unSubscribeNewsletterController)

module.exports = router
