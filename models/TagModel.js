const mongoose = require('mongoose')

const tagSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Tag name is required'],
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

exports.Tag = mongoose.model('Tag', tagSchema)
