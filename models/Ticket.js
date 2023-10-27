var mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true,
  },
  runningTime: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
  movieDate: {
    type: Date,
    default: Date.now(),
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;