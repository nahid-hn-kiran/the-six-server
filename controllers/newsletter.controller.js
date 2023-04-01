const { NewsLetter } = require('../models/NewsLetterModel')
const {
  subscribeNewsletterService,
  getSubscribersService,
  unSubscribeNewsletterService,
} = require('../services/newsletter.services')

exports.subscribeNewsletterController = async (req, res) => {
  try {
    const existsUser = await NewsLetter.findOne({ email: req.body.email })
    if (existsUser) {
      return res
        .status(400)
        .json({ status: 'fail', message: 'Your are already subscribed' })
    }
    const result = await subscribeNewsletterService(req.body)
    res
      .status(200)
      .json({ status: 'success', message: 'Successfully subscribed' })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message })
  }
}

exports.unSubscribeNewsletterController = async (req, res) => {
  try {
    const { id } = req.params
    const result = await unSubscribeNewsletterService(id)
    res
      .status(200)
      .json({ status: 'success', message: 'Successfully Unsubscribed' })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message })
  }
}

exports.getSubscribersController = async (req, res) => {
  try {
    const result = await getSubscribersService()
    res.status(200).json({ status: 'success', data: result })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message })
  }
}
