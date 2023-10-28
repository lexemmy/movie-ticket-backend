function generateTicketCode() {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let ticketCode = ''

  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    ticketCode += charset.charAt(randomIndex)
  }

  return ticketCode
}

function getToken(header) {
  let token = null

  for (let i = 0; i < header.length; i++) {
    const header = header[i].trim()
    if (header.startsWith('token=')) {
      token = header.substring(6)
      break
    }
  }

  return token
}

module.exports = {
  generateTicketCode,
}

module.exports = {
  getToken,
}
