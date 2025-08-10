const express = require("express");
const router = express.router();

router.get("/", (req, res) => {
  res.json([]);
});

module.exports = router;
