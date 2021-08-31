const express = require("express");
const router = express.Router();

const moment = require("moment");
const { tbl_product, tbl_table_orders } = require("../models/index");

// localhost:3000/pos/order/3 이라고 URL이 전송되어 오면
// 숫자 3이 변수 table_id에 담겨오게 된다.
// 이 table_id 는 req.params.table_id 를 getter하여 값을 확인할 수 있다.
router.get("/order/:table_id", async (req, res) => {
  const table_id = req.params.table_id;

  // p_name 칼럼을 기준으로 오름차순정렬하여 보여라
  const MENU = await tbl_product.findAll().then({ order: ["p_name", "ASC"] }); // 상품이름순으로 정렬

  res.render("order_view", { table_id, MENU });
});

// table id와 menu id가 Web으로부터 전달되어 왔다.
// 현재 table에 손님이 있고 메뉴를 주문하기 시작했다.
// let menu_list = [];
router.get("/order/:table_id/input/:menu_id", (req, res) => {
  const table_id = req.params.table_id;
  const menu_id = req.params.menu_id;

  // 선택된 메뉴를 menu_list에 추가
  tbl_product.findByPk(menu_id).then((product) => {
    //상품테이블에서 상품검색하고
    // menu_list.push(result);
    // console.log(menu_list);

    // tbl_table_orders 에 insert할 데이터 준비
    const table_orders = {
      to_table_id: table_id,
      to_pcode: menu_id,
      to_qty: 1,
      to_price: product.p_price,
      to_date: moment().format("YYYY[-]MM[-]DD"),
      to_time: moment().format("HH:mm:ss"),
    };
    tbl_table_orders.create(table_orders).then((result) => {
      tbl_table_orders
        .findAll({
          where: { to_table_id: table_id },
        })
        .then((order_list) => {
          res.json({ table_id, order_list });
        });
    });
  });

  //   const menu = {
  //     table_id,
  //     menu_id,
  //     menu_name: "1000원김밥",
  //     menu_price: 1000,
  //   };
  //   res.json(menu);

  //   res.send("선택된 메뉴 " + menu_id);
});

router.get("/getorder/:table_id", (req, res) => {
  const table_id = req.params.table_id;

  tbl_table_orders
    .findAll({ whrer: { to_table_id: table_id } })
    .then((result) => res.json(result));
});
module.exports = router;
