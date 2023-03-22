const express = require('express')
const app = express()
const cors = require('cors')
const articlesRoute = require('./routes/articles.route')
const usersRoute = require('./routes/users.route')

// Middlewares
app.use(express.json())
app.use(cors())

// Servers
app.use('/api/v1/articles', articlesRoute)
app.use('/api/v1/users', usersRoute)

module.exports = app
