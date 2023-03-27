const express = require('express')
const userController = require('../controllers/users.controller')
const { protectedContent } = require('../middlewares/verifyToken')
const router = express.Router()

// Servers
router.route('/').post(userController.createUserController)
router.route('/login').post(userController.loginUserController)
router.route('/profile').get(protectedContent, userController.getUserController)

module.exports = router
