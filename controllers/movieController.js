const Moive = require("../models/Movie");

exports.addMovie = async function (req, res) {
  let [title, description, runningTime, trailer, genre, image, releaseDate] =
    req.body;
};
exports.getMovies = async function (req, res) {};
exports.editMovie = async function (req, res) {};
exports.deleteMovie = async function (req, res) {};
