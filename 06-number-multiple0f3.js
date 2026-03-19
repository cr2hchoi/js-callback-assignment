// 고차 함수
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

// 6️⃣ 3의 배수 출력
var logMultipleOf3 = function (i) {
  if (i > 0 && i % 3 === 0) {
    console.log(i);
  }
};

repeat(10, logMultipleOf3);
