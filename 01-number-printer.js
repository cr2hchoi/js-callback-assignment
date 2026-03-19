// 고차 함수
function repeat(n, f) {
  for (vari = 0; i < n; i++) {
    f(i);
  }
}

// 1️⃣ 모든 숫자 출력
var logAll = function (i) {
  console.log(i); // 전달받은 인자 i를 그대로 출력
};

// 실행: 0부터 4까지 출력됨
repeat(5, logAll);
