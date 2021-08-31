// fetch를 통해서 되돌려 받은 주문리스트를
// 왼쪽의 주문리스트에 표시하기
const add_order_list = (menu_list) => {
  const order_box = document.querySelector("article.order_list"); // order_view.pug

  // 리스트가 중복되어 표시되는 것을 방지하기 위하여
  // 기존에 div.order_list가 있는지 확인하고
  // div.order_list를 가져와서,
  // 전체를 article.order_list로부터 삭제하기
  let order_list = document.querySelectorAll("div.order_list"); // All 사용
  if (order_list) {
    // order_list가 있으면
    order_list.forEach((order_tag) => {
      // list에 있는 요소를 tag에 하나씩담아서
      order_box.removeChild(order_tag); // 담은 것들을 하나하나 지운다
    });
  }

  const orders = menu_list.map((menu, index) => {
    order_list = document.createElement("div");
    order_list.classList.add("order_list");

    // div.menu_id tag를 만들어라
    const menu_id = document.createElement("div");
    menu_id.classList.add("menu_id");
    menu_id.innerText = menu.to_pcode;

    // div.menu_name tag를 만들어라
    const menu_name = document.createElement("div");
    menu_name.classList.add("menu_name");
    // menu_name.innerText = menu.p_name;

    const menu_qty = document.createElement("div");
    menu_qty.classList.add("menu_qty");
    menu_qty.innerText = menu.to_qty;

    const menu_price = document.createElement("div");
    menu_price.classList.add("menu_price");
    menu_price.innerText = menu.to_price;

    order_list.appendChild(menu_id);
    order_list.appendChild(menu_name);
    order_list.appendChild(menu_qty);
    order_list.appendChild(menu_price);

    return order_list;

    // order_box.appendChild(order_list);
  });

  order_box.append(...orders);
};

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
    .then((result) => {
      console.log(result);
      add_order_list(result.order_list);
    });
};

// DOMContentedLoaded event 를 설정하면
// JS 코드가 HTML의 어떤 부분에 있어도 상관 없이 작동된다.
document.addEventListener("DOMContentLoaded", () => {
  // 현재 화면이 열리면(주문화면)
  // table id값을 추출하기 위하여
  // article.order_list에서 dataset을 추출하여 변수에 담는다.
  const order_article = document.querySelector("article.order_list");
  const table_id = order_article.dataset.table_id;

  // article.product_list 의 div.menu가 클릭되면 할일 지정
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

  // 주문서 화면이 열릴때
  // table에 주문내용이 있으면 서버로부터 가져와서 보여라
  fetch(`/pos/getorder/${table_id}`)
    .then((res) => res.json())
    .then((result) => add_order_list(result));
});
