const { UpcomingMatches } = require('../models/UpcomingMatchesModel')

exports.upcomingMatchesService = async (match) => {
  const result = await UpcomingMatches.create(match)
  return result
}
exports.getUpcomingMatchesService = async () => {
  const result = await UpcomingMatches.find({ date: { $gt: new Date() } })
  return result
}
