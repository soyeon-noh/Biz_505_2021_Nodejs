const express = require("express");
const router = express.router();

router.get("/", (req, res) => {
  res.send("Requblic of Korea");
});

router.get("/my", (req, res) => {
  res.render("home");
});

module.exports = router;
