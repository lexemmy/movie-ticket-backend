const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const port = process.env.PORT || 3000
const indexRouter = require('./routes/index')

const app = express()
app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err))

app.use('/', indexRouter)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
