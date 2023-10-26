var mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  ticketCode: {
    type: String,
    required: true,
    unique: true,
  },
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