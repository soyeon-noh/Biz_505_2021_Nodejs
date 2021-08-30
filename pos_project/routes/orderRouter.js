const express = require("express");
const router = express.Router();

const { tbl_product, tbl_order } = require("../models/index");

router.get("/", (req, res) => {
  res.render("order");
});

module.exports = router;
