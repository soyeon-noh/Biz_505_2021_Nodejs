const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Requblic of Korea");
});

// app.js 설정이 /homes로 요청이 되면
// home.js 를 실행하기 때문에
// localhost:3000/homes/my로 요청을 한다.
router.get("/my", (req, res) => {
  const html = "<div>Korea</div>";

  res.render("home", { nation: "대한민국", html });
});

router.get("/add", (req, res) => {
  // browser에서 보내는 num1, num2 변수에 담긴 값을
  // 각각 추출하여 변수에 담아라
  // 이때 모든 변수는 문자열이다
  const num1 = req.query.num1;
  const num2 = req.query.num2;

  // 문자열 변수 num1, num2에 담긴 값을 정수로 변환하여
  // 덧셈하고 sum 변수에 저장하라
  const sum = parseInt(num1) + parseInt(num2);

  const result = {
    num1,
    num2,
    sum,
  };

  // JSON data를 web으로 응답 전송하라
  res.json(result);
});

router.get("/input", (req, res) => {
  res.render("input");
});

router.post("/input", (req, res) => {
  const 이름 = req.body.name;
  const 전화번호 = req.body.tel;
  const 나이 = req.body.age;

  console.log(req);

  res.json({ 이름, 전화번호, 나이 }); // 이거 한글이여서 안되는 사람있었음.
});

module.exports = router;
