// 고차 함수
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

// 2️⃣ 짝수만 출력
var logEven = function (i) {
  // 2로 나눈 나머지가 0이면 짝수!
  if (i % 2 === 0) {
    //타입 확인 =3개
    console.log(i);
  }
};

repeat(10, logEven);
//0,2,4,6,8
