const pcode = "P00001";
const pcodeMake = (p) => {
  let mcode = p.substring(1);
  mcode = parseInt(mcode) + 1;

  mcode = "000000" + mcode;
  mcode = mcode.substring(pcode.length * -1);

  mcode = "P" + mcode;
  console.log(mcode);
  return mcode;
};

let makeCode = pcode;
for (i = 0; i < 10; i++) {
  makeCode = pcodeMake(makeCode);
  console.log(makeCode);
}
