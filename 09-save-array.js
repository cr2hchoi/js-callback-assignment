// 공통 고차 함수
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

// 결과를 담을 빈 배열 선언
var arr = [];

// 9️⃣ 배열 저장 콜백 함수
var saveNumber = function (i) {
  // push : 배열 끝에 i 추가
  arr.push(i);
};

repeat(5, saveNumber);

// 최종 배열 출력
console.log(arr); // [0, 1, 2, 3, 4]
