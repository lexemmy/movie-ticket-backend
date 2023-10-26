var mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  runningTime: {
    type: String,
    required: true,
  },
  trailerLink: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    default: Date.now(),
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
