const mongoose = require('mongoose')
const validator = require('validator')

const heroSliderSchema = mongoose.Schema(
  {
    author: {
      type: String,
      required: [true, 'Author is required'],
    },
    title: {
      type: String,
      requred: [true, 'Slider title is required'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    thumbnail: {
      type: String,
      required: [true, 'thumbnail is required'],
      validate: {
        validator: function (value) {
          return validator.isURL(value)
        },
        message: 'Url not found',
      },
    },
    postUrl: {
      type: String,
      validate: {
        validator: function (value) {
          return validator.isURL(value)
        },
        message: 'Url not found',
      },
    },
  },
  {
    timestamps: true,
  }
)

exports.HeroSlider = mongoose.model('heroSlider', heroSliderSchema)
