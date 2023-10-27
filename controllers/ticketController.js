const Ticket = require("../models/Ticket");

exports.createTicket = async function (req, res) {};
exports.getTickets = async function (req, res) {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
};

  // Get a ticket by ID
  exports.getTicketById = async (req, res) => {
    const ticketId = req.params.ticketId;
    try {
      const ticket = await Ticket.findById(ticketId);
      if (!ticket) {
        return res.status(404).json({ message: 'Ticket not found' });
      }
      res.json(ticket);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  // Delete a ticket by ID
 exports.deleteTicket = async (req, res) => {
    const ticketId = req.params.ticketId;
    try {
      const ticket = await Ticket.findByIdAndDelete(ticketId);
      if (!ticket) {
        return res.status(404).json({ message: 'Ticket not found' });
      }
      res.json({ message: 'Ticket deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  // Edit a ticket by ID
  exports.editTicket = async (req, res) => {
    const ticketId = req.params.ticketId;
    const { movieName, runningTime, image, movieDate } = req.body;

    try {
        const ticket = await Ticket.findByIdAndUpdate(
            {_id: ticketId },
            {
                movieName: movieName,
                runningTime: runningTime,
                image: image,
                movieDate: movieDate,
            },
            { new: true }
        );

        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }

        res.json(ticket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};