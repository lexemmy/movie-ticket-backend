function generateTicketCode() {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let ticketCode = ''

  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    ticketCode += charset.charAt(randomIndex)
  }

  return ticketCode
}

module.exports = {
  generateTicketCode,
}
