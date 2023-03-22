const mongoose = require('mongoose')

const commentSchma = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: [true, 'Please write your comment'],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timeStamps: true,
  }
)

const articleSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: [true, 'Please provide a title.'],
      minLength: [5, 'Title must be at least 5 charecters.'],
      trim: true,
    },
    article: {
      type: String,
      required: [true, 'Please provide your article'],
      minLength: [50, 'article must be at least 50 charecters.'],
    },
    thumbnail: {
      type: String,
      required: [true, 'thumbnail is required'],
    },
    comments: [commentSchma],
  },
  {
    timeStamps: true,
  }
)

exports.Article = mongoose.model('article', articleSchema)
