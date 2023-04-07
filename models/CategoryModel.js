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
    thumbnail: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

exports.Category = mongoose.model('Category', categorySchema)
