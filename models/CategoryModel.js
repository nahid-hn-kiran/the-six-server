const mongoose = require('mongoose')
const validator = require('validator')

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    // thumbnail: {
    //   type: String,
    //   validate: {
    //     validator: function (value) {
    //       return validator.isURL(value)
    //     },
    //     message: 'Image not found',
    //   },
    // },
  },
  {
    timestamps: true,
  }
)

exports.Category = mongoose.model('Category', categorySchema)
