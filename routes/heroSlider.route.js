const express = require('express')
const router = express.Router()
const heroSliderController = require('../controllers/heroSlider.controller')
const { protectedContent, adminCheck } = require('../middlewares/verifyToken')

// Services
router
  .route('/')
  .post(
    protectedContent,
    adminCheck,
    heroSliderController.postHeroSliderController
  )
  .get(heroSliderController.getHeroSliderController)

module.exports = router
