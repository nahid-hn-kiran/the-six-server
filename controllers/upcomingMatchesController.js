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
    const { team1, team2, venue, datetime } = req.body
    const team1logo = req.files.team1logo[0].path
    const team2logo = req.files.team2logo[0].path
    const theMatch = {
      team1,
      team1logo,
      team2,
      team2logo,
      venue,
      datetime,
    }
    const result = await upcomingMatchesService(theMatch)
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
