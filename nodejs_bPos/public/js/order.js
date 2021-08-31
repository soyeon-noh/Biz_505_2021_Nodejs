// fetch를 사용하여 서버에 데이터를 요청하기 위해
// 별도의 함수를 선언하기
const order_input = (table_id, menu_id) => {
  // path Varriable 방식으로 menu_id 값을 URL에 포함하여
  // getter 요청하기

  /**
   * 만약 3번 테이블에 5번 메뉴를 추가하려고 Request를 한다면
   * localhost:3000/order/3/input/5 과 같은 URL을 만들어 서버로 Request한다.
   * 이런식으로 만드는 URL 방식을 RESTFull 요청이라고 한다.
   * (query가 아니라 의미있는 url방식)
   */
  fetch(`/pos/order/${table_id}/input/${menu_id}`) // ex) 3번테이블에 5번메뉴를 input
    .then((res) => res.json())
    .then((result) => console.log(result));
};

// DOMContentedLoaded event 를 설정하면
// JS 코드가 HTML의 어떤 부분에 있어도 상관 없이 작동된다.
document.addEventListener("DOMContentLoaded", () => {
  const order_article = document.querySelector("article.order_list");
  const table_id = order_article.dataset.table_id;

  const product_article = document.querySelector("article.product_list");

  if (product_article) {
    product_article.addEventListener("click", (e) => {
      const target = e.target;

      if (target.tagName === "DIV" && target.className.includes("menu")) {
        const menu_id = target.dataset.menu_id;
        // alert(menu_id + "가 선택됨");
        // document.location.href = `/pos/order/input/${menu_id}`;

        // fetch 전송을 위한 함수 호출
        order_input(table_id, menu_id); // order_input함수에게 menu_id 전달
      }
    });
  }
});
