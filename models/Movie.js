var mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
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
  imageLInk: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
});
//create a text index
movieSchema.index({ title: "text" });
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
