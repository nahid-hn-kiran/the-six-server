const {
  upcomingMatchesService,
  getUpcomingMatchesService,
} = require('../services/upcomingMatches.services')

/**
 *
 * @@ Desc {Create upcoming match}
 * @@ Post {Post it at /api/v1/users/upcoming-matches}
 * @@ Access {Admin}
 */
exports.postUpcomingMatchesController = async (req, res) => {
  try {
    const result = await upcomingMatchesService(req.body)
    res
      .status(200)
      .json({ status: 'success', data: 'Match created successfully' })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message })
  }
}

/**
 *
 * @@ Desc {Get upcoming matches}
 * @@ Post {Post it at /api/v1/users/upcoming-matches}
 * @@ Access {Admin}
 */
exports.getUpcomingMatchesController = async (req, res) => {
  try {
    const result = await getUpcomingMatchesService()
    res.status(200).json({ status: 'success', data: result })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message })
  }
}
