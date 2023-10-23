const express = require('express')
const router = express.Router()
let { hasAuth } = require('../middleware/auth.js')

const authController = require('../controllers/auth')

router.post('/auth/login', authController.login)
router.post('/auth/register', authController.register)

router.get('/', (req, res) => {
  res.json({
    version: '1.0.0',
    message: 'Welcome to Movie Ticket API',
  })
})

module.exports = router
