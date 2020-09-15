require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const router = require('./config/routes')
const errorHandler = require('./lib/errorHandler')
const { dbURI } = require('./config/environment')
// const path = require('path')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log(err)
    console.log('Mongo is connected!')
  }
)

app.use(express.static(`${__dirname}/frontend/build`))

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 5000 }))
app.use(bodyParser.json({ limit: '50mb' }))


app.use('/api', router)

app.use('/*', (req, res) => res.sendfile(`${__dirname}/frontend/build/index.html`))

app.use(errorHandler)

// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   // Set the static folder to use
//   app.use(express.static('frontend/build'))

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   })
// }

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=> console.log(`Express is listening on PORT ${PORT}`))