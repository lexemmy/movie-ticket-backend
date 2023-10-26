const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

const Authentication = require("../middleware/auth.js");

// router.use(Authentication.hasAuth);
router.get("/", movieController.getMovies);
router.post("/", movieController.addMovie);
router.put("/:id", movieController.editMovie);
router.delete("/:id", movieController.deleteMovie);

module.exports = router;
