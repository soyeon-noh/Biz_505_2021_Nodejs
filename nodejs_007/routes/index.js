var express = require("express");
var router = express.Router();

// models 폴더에서 정보를 읽어서 tbl_bbs 객체를 사용할 수 있도록 선언
// models/index.js 는
//  models 폴더에 있는 table 설정과 관련된 파일들을 읽어서 객체로 return 한다.
// return 된 객체에서 table 객체 요소만 추출하여 사용하도록 전개연산을 수행한다.
const { tbl_bbs } = require("../models/index");

/* GET home page. */
router.get("/", function (req, res, next) {
  tbl_bbs.findAndCountAll().then((result) => {
    console.log(result);
    const BBS = { result };
    // 하나의 router 안에서 render가 중복되면 원하지않는 결과가 나올 수 있다.
    res.render("index", { BBS: result.rows });
  });
});

module.exports = router;
