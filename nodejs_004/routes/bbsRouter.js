const express = require("express");
const router = express.Router();

const { tbl_bbs } = require("../models/index");

router.get("/write", (req, res) => {
  res.render("write");
});

router.post("/write", (req, res) => {
  tbl_bbs.create(req.body).then((result) => {
    res.json(result);
  });
});

/* GET home page. */
router.get("/update", function (req, res, next) {
  let seq = req.query.seq;
  console.log("여기시퀀스넘어오냐?", seq);

  tbl_bbs.findByPk(seq).then((result) => {
    // console.log("여기 findById 되냐?", result);
    // res.json(result); // 이렇게 확인

    res.render("update", { BBS: result });
  });
});

router.post("/update", (req, res) => {
  console.log("여기되니?");

  tbl_bbs.create(req.body).then((result) => {
    res.json(result);
  });
});

module.exports = router;
