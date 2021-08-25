const fontNames = [
  "맑은 고딕",
  "궁서",
  "굴림",
  "바탕체",
  "돋움체",
  "Arial",
  "Arial Black",
  "Comic Sans MS",
  "Courier New",
];

const fontSizes = [
  "8",
  "9",
  "10",
  "12",
  "14",
  "16",
  "18",
  "20",
  "25",
  "30",
  "40",
  "50",
  "65",
  "72",
  "81",
  "100",
  "121",
  "144",
];

const toolbar = [
  ["style", ["bold", "italic", "underline"]],
  ["font", ["fontname", "fontsize"]],
  ["design", ["height", "color"]],
  ["para", ["ul", "ol", "paragraph"]],
  ["Misc", ["undo", "codeview", "redo"]],
];
$("#b_text").summernote({
  lang: "ko-KR",
  toolbar,
  fontNames: fontNames,
  fontsize: fontSizes,
  placeholder: "내용을 입력해주세요",
  width: "60%",
  height: "300px",
});
