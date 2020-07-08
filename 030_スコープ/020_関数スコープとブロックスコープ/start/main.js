// 関数内で宣言した変数は関数内でしか使えない
function a() {
  let b = 0;
  console.log(b);
}
a();

// {}の中がブロックスコープ。
// let,constはブロックスコープ対応。var,functionはブロックスコープが機能しない。
// const d = functionの書き方ならconstが適応されるのでブロックスコープが機能する。
{
  let c = 1;
  var d = 5;
  console.log(c);
  function e() {
    console.log('e is called');
  }
}
console.log(d);
e();
