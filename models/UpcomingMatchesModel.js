const mongoose = require('mongoose')
const validator = require('validator')

const upcomingMatchesSchema = mongoose.Schema(
  {
    datetime: {
      type: Date,
      required: [true, 'date is required'],
    },
    venue: {
      type: String,
      requierd: [true, 'venue is required'],
    },
    team1: {
      type: String,
      required: [true, 'team 1 is required'],
      trim: true,
    },
    team1logo: {
      type: String,
      required: [true, 'team 1 logo is required'],
    },
    team2: {
      type: String,
      required: [true, 'team 1 is required'],
      trim: true,
    },
    team2logo: {
      type: String,
      required: [true, 'team 2 logo is requierd'],
    },
  },
  {
    timestamps: true,
  }
)

exports.UpcomingMatches = mongoose.model('upcomingmatch', upcomingMatchesSchema)
