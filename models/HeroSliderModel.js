const mongoose = require('mongoose')
const validator = require('validator')

const heroSliderSchema = mongoose.Schema(
  {
    title: {
      type: String,
      requred: [true, 'Slider title is required'],
    },
    description: {
      type: String,
    },
    thumbnail: {
      type: String,
      required: [true, 'thumbnail is required'],
    },
    url: {
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
