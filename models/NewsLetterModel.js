const mongoose = require('mongoose')
const validator = require('validator')

const newsLetterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      validate: {
        validator: function (value) {
          return validator.isEmail(value)
        },
        message: 'Please provide a valid email',
      },
    },
  },
  {
    timestamps: true,
  }
)

exports.NewsLetter = mongoose.model('NewsLetter', newsLetterSchema)
