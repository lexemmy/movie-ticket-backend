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
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;