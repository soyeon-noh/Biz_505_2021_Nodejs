document.addEventListener("DOMContentLoaded", () => {
  const menu_list = document.querySelector("article.menu_list");

  if (menu_list) {
    menu_list.addEventListener("click", (e) => {
      const target = e.target;

      if (target.tagName === "DIV" && target.className.includes("menu")) {
        const menu_id = target.dataset.p_code;
        // alert(menu_id + "가 선택됨");
        document.location.href = `/order/table/input/${menu_id}`;
      }
    });
  }
});
