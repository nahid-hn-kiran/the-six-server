const { User } = require('../models/UserModel')
const { createUserService, loginService } = require('../services/usersServices')
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
    res.status(400).json({ status: 'fail', error: error.message })
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
    res.status(400).json({ status: 'fail', error: error.message })
  }
}
