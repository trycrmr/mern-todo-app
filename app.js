const path = require('path')
const express = require('express')

const router = require('./routes/index')
const PORT = 3000

const app = express()
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/', router)

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`)
})