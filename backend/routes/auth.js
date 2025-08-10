const express = require("express");
const router = express.router();

router.get("/", (req, res) => {
  obj = {
    a: "Sample object",
    number: 27,
  };
  res.json(obj);
});

module.exports = router;
