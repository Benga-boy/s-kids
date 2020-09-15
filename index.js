require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const router = require('./config/routes')
const errorHandler = require('./lib/errorHandler')
const { dbURI } = require('./config/environment')


mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log(err)
    console.log('Mongo is connected!')
  }
)

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 5000 }))
app.use(bodyParser.json({ limit: '50mb' }))


app.use('/api', router)

app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=> console.log(`Express is listening on PORT ${PORT}`))