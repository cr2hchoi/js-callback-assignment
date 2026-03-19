// 고차 함수
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}
// 4️⃣ 제곱 출력
var logSquare = function (i) {
  // 제곱식 : i * i or i ** 2
  console.log(i * i);
};

// 0,1,4,9,16
repeat(5, logSquare);
