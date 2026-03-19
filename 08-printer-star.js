// 고차 함수
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

// 8️⃣ 별 출력
var logStar = function (i) {
  // i가 0일 때 별 1개, 1일 때 별 2개... 가 필요하므로 (i + 1) 사용
  // .repeat(count)는 문자열을 count만큼 반복
  console.log('*'.repeat(i + 1));
};

// 실행: *, **, ***, ****
repeat(4, logStar);
