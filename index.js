const app = require('./server')
const dotenv = require('dotenv')
const express = require('express')
const { default: mongoose } = require('mongoose')
const { notFound, errorHandler } = require('./middlewares/errorHandler')
const connectDB = require('./utills/connectDb')

dotenv.config({
  path: 'config/config.env',
})

// Database connection
connectDB()

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Express is running from port: ${port}`)
})
