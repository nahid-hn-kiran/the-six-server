const jwt = require('jsonwebtoken')
const { promisify } = require('util')

exports.protectedContent = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(' ')?.[1]
    if (!token) {
      return res.status(401).jsn({ status: 'fail', message: 'Not Authorized' })
    }
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ status: 'fail', message: 'Unauthorized user.' })
  }
}
