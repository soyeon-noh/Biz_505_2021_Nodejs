const express = require("express");
const router = express.Router();

const { tbl_table_orders, sequelize } = require("../models/index");
// sequelize 이름 제대로 써야한다. 여기서 정한이름이아니라 /index에서 쓴거래

/* GET home page. */
router.get("/", async (req, res, next) => {
  const TABLE_COUNT = 12;
  let tables_layout = []; // 12개짜리 배열로 선언된다.

  // 1. table_orders에 현재 주문이 있는지 확인하기 위하여 SELECT

  /* 이 코드를 sequelize를 사용해 코드로 만든 것이다.
  SELECT to_table_id, count(to_table_id) AS count
  FROM tbl_table_orders
  WHERE to_pay IS NULL
  GROUP BY to_table_id;
	*/
  const table_order_count = await tbl_table_orders.findAll({
    attributes: [
      "to_table_id",
      [sequelize.fn("count", sequelize.col("to_table_id")), "count"],
    ],
    where: { to_pay: null },
    group: "to_table_id",
  });

  for (let index = 0; index < TABLE_COUNT; index++) {
    /**
     * table 1번, table 2번에 주문이 있다면
     * table_order_count의 리스트 중에서 해당하는 데이터가 있을 것이다.
     * 그 데이터를 찾아 달라
     */

    // table_order_count를 반복하다가
    // 그 요소중에 to_table_id == index + 1 과 같은 요소가 있으면 retrun한다.
    const result = table_order_count.find((order) => {
      return order.dataValues.to_table_id == index + 1;
    });

    const table_data = {
      // table_data 객체 생성
      id: index + 1,
      table_name: index + 1 + "번 테이블",
    };
    // table_id가 일치하는 데이터를 찾을 경우
    if (result) {
      table_data.order_count = result.dataValues.count; // conut값을 셋팅
      // 일치하는 데이터를 찾지 못한 경우
    } else {
      table_data.order_count = 0; // 0으로 셋팅
    }
    console.log(table_data);
    tables_layout.push(table_data);
  }

  console.log(tables_layout);
  res.render("index", { TABLES: tables_layout });
});

module.exports = router;
