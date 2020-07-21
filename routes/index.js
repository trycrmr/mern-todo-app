const router = require('express').Router()
const mw = require('../middlewares')


const todos = require('./todos')

router.use((req, res, next) => {
  console.info(`${req.originalUrl} ${req.method} ${mw.getTime()}`)
  next()
})

router.get('/', (req, res) => {
  res.send('hello homepage')
})

router.use('/todos', todos)

module.exports = router