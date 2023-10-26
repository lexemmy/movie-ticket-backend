const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

const Authentication = require("../middleware/auth.js");

router.use(Authentication.hasAuth);
router.get("/", movieController.getMovies);
router.post("/", movieController.getMovies);
router.put("/:id", movieController.getMovies);
router.delete("/:id", movieController.getMovies);

module.exports = router;
