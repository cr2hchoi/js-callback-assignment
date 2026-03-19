// 고차 함수
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

// 7️⃣ 숫자 두 배 출력
var logDouble = function (i) {
  // 받은 숫자 i에 2를 곱해서 출력합니다.
  console.log(i * 2);
};

// 0,2,4,6,8
repeat(5, logDouble);
