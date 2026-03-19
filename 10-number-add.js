// 공통 고차 함수
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

// 합계를 저장할 변수 초기화
var sum = 0;

// 🔟 누적 합 계산 콜백함수
var add = function (i) {
  // 기존 sum 값에 새로운 i를 더해서 다시 sum에 할당
  // 이거랑 같당! -->>> sum = sum + i;
  sum += i;
};

//실행
repeat(5, add);

// 최종 합계 출력
console.log(sum); // 10
