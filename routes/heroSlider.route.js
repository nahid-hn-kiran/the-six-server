const express = require('express')
const router = express.Router()
const heroSliderController = require('../controllers/heroSlider.controller')
const { protectedContent } = require('../middlewares/verifyToken')
const imageUploader = require('../middlewares/uploader')

// Services
router
  .route('/')
  .post(
    imageUploader.single('thumbnail'),
    heroSliderController.postHeroSliderController
  )
  .get(heroSliderController.getHeroSliderController)

module.exports = router
