// 고차 함수
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

// 2️⃣ 짝수만 출력
var logOdd = function (i) {
  // 2로 나눈 나머지가 0이면 아니면 홀수
  if (i % 2 !== 0) {
    //타입 확인 =1개 더붙이기
    console.log(i);
  }
};

repeat(10, logOdd);
//1,3,5,7,9
