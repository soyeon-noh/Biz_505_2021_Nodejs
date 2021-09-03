const bbs_list_view = async (bbs_list) => {
  const bbs_head = document.querySelector("tbody.bbs_list");
  bbs_head.innerText = ""; // 사람들이 위험한코드라고한대.. 쌤은 잘모르겠대
  // 다 지워버리고

  const trs = bbs_list.map((bbs, index) => {
    console.log("BBS_LIUST", index); // index 왜쓰냐구 물어보니까 이걸로 보여주심
    const tds = Object.keys(bbs).map((key) => {
      const td = document.createElement("TD");
      td.innerText = bbs[key];
      return td;
    });

    const tr = document.createElement("TR");
    tr.append(...tds);
    return tr;
  });
  bbs_head.append(...trs); // 전개연산자 // 어팬드
};

// class나 id를 사용하지않고 html 태그만으로 select하기
const data_send = async () => {
  const b_date = document.querySelector("input[name='b_date']");
  const b_time = document.querySelector("input[name='b_time']");
  const b_writer = document.querySelector("input[name='b_writer']");
  const b_subject = document.querySelector("input[name='b_subject']");
  const b_text = document.querySelector("input[name='b_text']");

  // 객체선언
  const form_data = {
    b_date: b_date.value,
    b_time: b_time.value,
    b_writer: b_writer.value,
    b_subject: b_subject.value,
    b_text: b_text.value,
  };
  console.log(form_data);

  const fetch_option = {
    method: "POST",
    body: JSON.stringify(form_data), //body에 데이터를 심고
    headers: {
      // headers 에 내가 보내보내고자 하는 것이 json 타입이란걸 알려줌
      "Content-Type": "application/json",
    },
  };
  const res = await fetch("/bbs/write", fetch_option); // fetch
  const json = await res.json();
  await console.log(json);
  await bbs_list_view(json);
};

document.addEventListener("DOMContentLoaded", () => {
  const btn_save = document.querySelector("button.btn_save_json");

  if (btn_save) {
    btn_save.addEventListener("click", () => {
      alert("저장");
      data_send();
    });
  }
});
