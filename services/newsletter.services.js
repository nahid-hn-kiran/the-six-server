const { NewsLetter } = require('../models/NewsLetterModel')

exports.subscribeNewsletterService = async (user) => {
  const result = await NewsLetter.create(user)
  return result
}

exports.getSubscribersService = async () => {
  const result = await NewsLetter.find({})
  return result
}

exports.unSubscribeNewsletterService = async (userId) => {
  const result = await NewsLetter.deleteOne({ _id: userId })
  return result
}
