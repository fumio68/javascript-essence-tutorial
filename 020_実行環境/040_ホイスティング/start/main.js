a();

function a() {
  let c = 1;
  console.log(c);
  d();
  function d() {
    console.log('d is called');
  }
  console.log('a is called');
}

let b = 0;
console.log(b);

// 宣言と実行の順序
