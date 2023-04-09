const express = require('express')
const {
  postUpcomingMatchesController,
  getUpcomingMatchesController,
} = require('../controllers/upcomingMatchesController')
const { protectedContent, adminCheck } = require('../middlewares/verifyToken')
const router = express.Router()

// Servers
router
  .route('/')
  .post(protectedContent, adminCheck, postUpcomingMatchesController)
  .get(getUpcomingMatchesController)

module.exports = router
