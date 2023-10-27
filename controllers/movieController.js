const Movie = require("../models/Movie");

exports.addMovie = async (req, res) => {
  let { title, description, runningTime, trailerLink, genre, releaseDate } =
    req.body;

  try {
    let imageLInk = req.file.path;
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
      res.status(200).json({ message: newMovie });
    } else {
      return res.status(404).json({ message: "incorrect data input" });
    }
  } catch (err) {
    return res.status(404).json({ message: "Input Error " });
  }
};
exports.getMovies = async function (req, res) {
  let title = req.query.title;
  try {
    if (title) {
      console.log(await Movie.find({ $text: { $search: title } }));
      return res
        .status(200)
        .json(await Movie.find({ $text: { $search: title } }));
    } else {
      console.log(await Movie.find());
      return res.status(200).json(await Movie.find());
    }
  } catch (err) {
    return res.status(501).json({ message: err });
  }
};
exports.getMoviesById = async function (req, res) {
  let id = req.params.id;
};
exports.editMovie = async function (req, res) {};
exports.deleteMovie = async function (req, res) {};
