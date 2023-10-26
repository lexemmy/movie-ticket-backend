const Movie = require("../models/Movie");

exports.addMovie = async (req, res) => {
  let {
    title,
    description,
    runningTime,
    trailerLink,
    genre,
    imageLInk,
    releaseDate,
  } = req.body;
  try {
    if (
      title &&
      description &&
      runningTime &&
      trailerLink &&
      genre &&
      imageLInk &&
      releaseDate
    ) {
      releaseDate = new Date(releaseDate);
      const newMovie = new Movie({
        title,
        description,
        runningTime,
        trailerLink,
        genre,
        imageLInk,
        releaseDate,
      });
      await newMovie.save();
      return res.status(200).json({ message: newMovie });
    } else {
      return res.status(404).json({ message: "incorrect data input" });
    }
  } catch (err) {
    return res.status(501).json({ message: "Error " + err });
  }
};
exports.getMovies = async function (req, res) {
  let { movieName, movie } = req.query;
};
exports.editMovie = async function (req, res) {};
exports.deleteMovie = async function (req, res) {};
