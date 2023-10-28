const jwt = require('jsonwebtoken')
//const { getToken } = require('../utils/utility')

exports.hasAuth = (req, res, next) => {
  let authHeaders = req.get('authorization').split(';')
  let token = null
  for (let i = 0; i < authHeaders.length; i++) {
    const authHeader = authHeaders[i].trim()
    if (authHeader.startsWith('token=')) {
      token = authHeader.substring(6)
      break
    }
  }
  console.log(token)
  if (!token) {
    return res.status(401).json({ error: 'Authorization header missing' })
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' })
    }
    req.user = user

    next()
  })
}
