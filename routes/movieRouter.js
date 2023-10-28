const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");
const imageUpload = require("../middleware/imageUpload");
const Authentication = require("../middleware/auth.js");

router.get("/", movieController.getMovies);
router.get("/:movieId", movieController.getMovieById);
router.use(Authentication.hasAuth);
router.post("/", imageUpload.uploadImage, movieController.addMovie);
router.put("/:movieId", imageUpload.uploadImage, movieController.editMovie);
router.delete("/:movieId", movieController.deleteMovie);

module.exports = router;
