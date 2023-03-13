const books = require('express').Router()

books.get('/', (req, res) => {
  res.send('Hello World from BooksAPI')
})

module.exports = books