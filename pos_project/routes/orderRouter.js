const express = require("express");
const router = express.Router();

const { tbl_product, tbl_order } = require("../models/index");

router.get("/", (req, res) => {
  console.log("ha", req.query.table);
  tbl_product.findAndCountAll().then((result) => {
    console.log(result);
    res.render("order", { MENU: result.rows });
  });
});

module.exports = router;
