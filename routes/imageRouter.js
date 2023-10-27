const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/:filename", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "images", req.params.filename));
});

module.exports = router;
