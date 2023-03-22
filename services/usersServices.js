const { User } = require('../models/UserModel')

exports.createUserService = async (user) => {
  const createdUser = await User.create(user)
  return createdUser
}

exports.loginService = async (email) => {
  return await User.findOne({ email })
}
