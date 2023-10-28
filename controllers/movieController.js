const Movie = require('../models/Movie')

exports.addMovie = async (req, res) => {
  let { title, description, runningTime, trailerLink, genre, releaseDate } =
    req.body

  try {
    let imageLink = req.file.path
    if (
      title &&
      description &&
      runningTime &&
      trailerLink &&
      genre &&
      imageLink &&
      releaseDate
    ) {
      releaseDate = new Date(releaseDate)
      const newMovie = new Movie({
        title,
        description,
        runningTime,
        trailerLink,
        genre,
        imageLink,
        releaseDate,
      })
      await newMovie.save()
      res.status(200).json({ message: newMovie })
    } else {
      return res.status(404).json({ message: 'incorrect data input' })
    }
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Input Error ' })
  }
}
exports.getMovies = async function (req, res) {
  let title = req.query.title
  try {
    if (title) {
      console.log(await Movie.find({ $text: { $search: title } }))
      return res
        .status(200)
        .json(await Movie.find({ $text: { $search: title } }))
    } else {
      return res.status(200).json(await Movie.find())
    }
  } catch (err) {
    return res.status(501).json({ message: err })
  }
}
exports.getMovieById = async (req, res) => {
  const movieId = req.params.movieId
  try {
    const movie = await Movie.findOne({ _id: movieId })
    if (!movie) {
      return res.status(404).json({ message: 'movie not found' })
    }
    res.json(movie)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
exports.editMovie = async (req, res) => {
  const movieId = req.params.movieId
  const { title, description, runningTime, trailerLink, genre, releaseDate } =
    req.body

  try {
    let imageLink = req.file.path
    const movie = await Movie.findByIdAndUpdate(
      { _id: movieId },
      {
        title: title,
        description: description,
        runningTime: runningTime,
        trailerLink: trailerLink,
        genre: genre,
        imageLink: imageLink,
        releaseDate: releaseDate,
      },
      { new: true }
    )

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' })
    }

    res.json(movie)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.deleteMovie = async function (req, res) {
  const movieId = req.params.movieId
  try {
    const movie = await Movie.findByIdAndDelete(movieId)
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' })
    }
    res.status(200).json({ message: 'Movie deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
