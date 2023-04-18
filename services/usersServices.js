const { User } = require('../models/UserModel')

exports.createUserService = async (user) => {
  const createdUser = await User.create(user)
  return createdUser
}

exports.loginService = async (email) => {
  return await User.findOne({ email })
}

exports.getAllUsersService = async () => {
  return await User.find({ role: { $ne: 'admin' } }).select('-password')
}

exports.getAllAdminsService = async () => {
  return await User.find({ role: 'admin' }).select('-password')
}

exports.getUserService = async (userId) => {
  return await User.findById(userId).select('-password')
}

exports.updateUserRoleService = async (userId, role) => {
  const result = await User.updateOne({ _id: userId }, { role: role })
  return result
}
