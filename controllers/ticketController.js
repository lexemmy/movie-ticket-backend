const Ticket = require('../models/Ticket')
const { generateTicketCode } = require('../utils/utility')

// Create a new ticket
exports.createTicket = async function (req, res) {
  // Extract ticket data from the request body
  const { movieName, runningTime, image, movieDate } = req.body

  try {
    // Create a new ticket document using the Ticket model
    const code = generateTicketCode()

    const newTicket = new Ticket({
      movieName,
      runningTime,
      image,
      movieDate,
      code,
    })

    // Save the new ticket to the database
    const savedTicket = await newTicket.save()

    // Return the saved ticket as the response
    res.status(201).json(savedTicket)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
exports.getTickets = async function (req, res) {
  try {
    const tickets = await Ticket.find()
    res.json(tickets)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Get a ticket by ID
exports.getTicketById = async (req, res) => {
  const ticketId = req.params.ticketId
  try {
    const ticket = await Ticket.findById(ticketId)
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' })
    }
    res.json(ticket)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.getTicketByCode = async (req, res) => {
  const ticketCode = req.params.ticketCode 

  try {
    const ticket = await Ticket.findOne({ code: ticketCode })

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' })
    }

    res.json(ticket)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Delete a ticket by ID
exports.deleteTicket = async (req, res) => {
  const ticketId = req.params.ticketId
  try {
    const ticket = await Ticket.findByIdAndDelete(ticketId)
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' })
    }
    res.json({ message: 'Ticket deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Edit a ticket by ID
exports.editTicket = async (req, res) => {
  const ticketId = req.params.ticketId
  const { movieName, runningTime, image, movieDate } = req.body

  try {
    const ticket = await Ticket.findByIdAndUpdate(
      { _id: ticketId },
      {
        movieName: movieName,
        runningTime: runningTime,
        image: image,
        movieDate: movieDate,
      },
      { new: true }
    )

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' })
    }

    res.json(ticket)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
