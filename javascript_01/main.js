// Global Scope - accessible from anywhere

var a = 20; // 이제는 사용하는 게 좋지 않지만
let b = 40; // const와 같이 작동한다

function decode() {
  return b;
}

// Fuction Scope = inaccessible from outside function

function decode() {
  var a = 20;
}
console.log(a);

// Block Scope - inaccessible from outside block ({})

if (100 > 20) {
  let a = 20;
}
console.log(a);

if (100 > 20) {
  var b = 20;
}
console.log(a);

function decode() {
  let b = 20;
}

console.log(a);
