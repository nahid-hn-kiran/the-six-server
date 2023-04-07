const express = require('express')
const {
  postUpcomingMatchesController,
  getUpcomingMatchesController,
} = require('../controllers/upcomingMatchesController')
const { protectedContent } = require('../middlewares/verifyToken')
const imageUploader = require('../middlewares/uploader')
const router = express.Router()

// Servers
router
  .route('/')
  .post(
    imageUploader.fields([
      { name: 'team1logo', maxCount: 1 },
      { name: 'team2logo', maxCount: 1 },
    ]),
    postUpcomingMatchesController
  )
  .get(getUpcomingMatchesController)

module.exports = router
