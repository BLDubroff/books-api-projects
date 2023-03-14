// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const app = express();



// MIDDLEWARE
  app.use(express.urlencoded({ exteneded: true }))

  app.get('/', (req, res) => {
    res.send("Hello from Index")
  })
  
// controllers
const bookController = require('./controllers/books_controller');
app.use('/books', bookController)

// LISTEN
  app.listen(process.env.PORT, () => {
    console.log('I am alive on: ', process.env.PORT)
  })

  module.exports = app;