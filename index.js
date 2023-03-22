const app = require('./server')
const dotenv = require('dotenv')
const { default: mongoose } = require('mongoose')

dotenv.config({
  path: 'config/config.env',
})

// Database connection
mongoose.connect(process.env.LOCAL_DB).then(() => {
  console.log('Database connection Succesful')
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Express is running from port: ${port}`)
})
