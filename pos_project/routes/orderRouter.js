const express = require("express");
const router = express.Router();

const { tbl_products, tbl_orders } = require("../models/index");

router.get("/", (req, res) => {
  tbl_products.findAndCountAll().then((result) => {
    console.log(result);
    res.render("order", { MENU: result.rows });
  });
});

module.exports = router;
