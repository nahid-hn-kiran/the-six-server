const express = require('express')
const {
  postUpcomingMatchesController,
  getUpcomingMatchesController,
} = require('../controllers/upcomingMatchesController')
const { protectedContent } = require('../middlewares/verifyToken')
const router = express.Router()

// Servers
router
  .route('/')
  .post(protectedContent, postUpcomingMatchesController)
  .get(getUpcomingMatchesController)

module.exports = router
