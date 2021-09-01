const express = require("express");
const router = express.Router();

const { tbl_product, tbl_order } = require("../models/index");

// index에서 테이블을 눌렀을 때
router.get("/table/:table_id", (req, res) => {
  const table_id = req.params.table_id;
  console.log("테이블 ID", table_id);

  tbl_product.findAndCountAll().then((result) => {
    console.log(result);
    res.render("order", { MENU: result.rows, table_id });
  });
});

// order에서 메뉴를 눌렀을 때
router.get("/table/input/:menu:id", (req, res) => {
  const menu_id = req.params.menu_id;
});

module.exports = router;
