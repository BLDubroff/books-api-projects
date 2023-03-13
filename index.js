// DEPENDENCIES
const express = require('express')

// CONFIGURATION
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
  app.listen(3000, () => {
    console.log('I am alive')
  })

  module.exports = app;