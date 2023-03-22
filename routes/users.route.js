const express = require('express')
const {
  createUserController,
  loginUserController,
} = require('../controllers/users.controller')
const router = express.Router()

// Servers
router.route('/').post(createUserController)
router.route('/login').post(loginUserController)

module.exports = router
