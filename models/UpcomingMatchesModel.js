const mongoose = require('mongoose')
const validator = require('validator')

const upcomingMatchesSchema = mongoose.Schema(
  {
    date: {
      type: Date,
      required: [true, 'date is required'],
    },
    time: {
      type: String,
      required: [true, 'time is required'],
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
    team1Logo: {
      type: String,
      required: [true, 'team 1 logo is required'],
      validate: {
        validator: function (value) {
          return validator.isURL(value)
        },
        message: 'Image not found',
      },
    },
    team2: {
      type: String,
      required: [true, 'team 1 is required'],
      trim: true,
    },
    team2Logo: {
      type: String,
      required: [true, 'team 2 logo is requierd'],
      validate: {
        validator: function (value) {
          return validator.isURL(value)
        },
        message: 'Image not found',
      },
    },
  },
  {
    timestamps: true,
  }
)

exports.UpcomingMatches = mongoose.model('upcomingmatch', upcomingMatchesSchema)
