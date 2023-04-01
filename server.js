const express = require('express')
const app = express()
const cors = require('cors')
const articlesRoute = require('./routes/articles.route')
const usersRoute = require('./routes/users.route')
const heroSliderRoute = require('./routes/heroSlider.route')
const upcomingMatchesRoute = require('./routes/upcomingMatches.route')
const newsLetterRoute = require('./routes/newsletter.route')
const categoryRoute = require('./routes/category.route')
const tagRoute = require('./routes/tag.route')

// Middlewares
app.use(express.json())
app.use(cors())

// Servers
app.use('/api/v1/articles', articlesRoute)
app.use('/api/v1/users', usersRoute)
app.use('/api/v1/heroslider', heroSliderRoute)
app.use('/api/v1/upcoming-matches', upcomingMatchesRoute)
app.use('/api/v1/newsletter', newsLetterRoute)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/tag', tagRoute)

module.exports = app
