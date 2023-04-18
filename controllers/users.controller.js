const { User } = require('../models/UserModel')
const {
  createUserService,
  loginService,
  getUserService,
  getAllUsersService,
  getAllAdminsService,
  updateUserRoleService,
} = require('../services/usersServices')
const generateToken = require('../utills/token')

/**
 *
 * @@ Desc {Post a new user}
 * @@ Post {Post it at /api/v1/users}
 * @@ Access {public}
 */
exports.createUserController = async (req, res) => {
  try {
    const existsUser = await User.findOne({ email: req.body.email })
    if (existsUser) {
      return res
        .status(400)
        .json({ status: 'fail', message: 'user already exists. please login.' })
    }
    const user = await createUserService(req.body)
    res
      .status(201)
      .json({ status: 'success', message: 'User created successfully' })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message })
  }
}

/**
 *
 * @@ Desc {Login as user}
 * @@ Post {Post it at /api/v1/users/login}
 * @@ Access {public}
 */
exports.loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res
        .status(401)
        .json({ status: 'fail', message: 'please provide your credentials.' })
    }
    const user = await loginService(email)
    if (!user) {
      return res.status(401).json({
        status: 'fail',
        message: 'No user found. please create an account',
      })
    }
    const isPasswordValid = user.comparePassword(password, user.password)
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ status: 'fail', message: 'Email or password wrong.' })
    }
    const token = generateToken(user)
    const { password: pass, ...others } = user.toObject()
    res.status(200).json({
      status: 'success',
      message: 'successfully logged in',
      data: {
        user: others,
        token,
      },
    })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message })
  }
}

/**
 *
 * @@ Desc {Get all users}
 * @@ Get {Get it at /api/v1/users}
 * @@ Access {Admin}
 */
exports.getAllUsersController = async (req, res) => {
  try {
    const result = await getAllUsersService()
    res.status(200).json({ status: 'success', users: result })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message })
  }
}
/**
 *
 * @@ Desc {Get all Admins}
 * @@ Get {Get it at /api/v1/users/admin}
 * @@ Access {Admin}
 */
exports.getAllAdminsController = async (req, res) => {
  try {
    const result = await getAllAdminsService()
    res.status(200).json({ status: 'success', admins: result })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message })
  }
}
/**
 *
 * @@ Desc {Get logged in user by id}
 * @@ Get {Post it at /api/v1/users/profile}
 * @@ Access {public}
 */
exports.getUserController = async (req, res) => {
  try {
    const userId = req.user?._id
    const result = await getUserService(userId)
    res.status(200).json({ status: 'success', user: result })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message })
  }
}
/**
 *
 * @@ Desc {Get a user by id}
 * @@ Get {Post it at /api/v1/users/user}
 * @@ Access {public}
 */
exports.getUserByIdController = async (req, res) => {
  try {
    const userId = req.headers.userid
    const result = await getUserService(userId)
    res.status(200).json({ status: 'success', user: result })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message })
  }
}
/**
 *
 * @@ Desc {Update a user}
 * @@ Get {Post it at /api/v1/admin}
 * @@ Access {public}
 */
exports.updateUserRole = async (req, res) => {
  try {
    const { id, role } = req.body
    const result = await updateUserRoleService(id, role)
    res.status(200).json({ status: 'success', user: result })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message })
  }
}
