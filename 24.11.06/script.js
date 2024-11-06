const numbers = [1, 2, 3, 4, 5];

// 첫번째로 배열의 값을 모두 더 해주는 함수를 만들어보세요 결과는 15

function numbers1() {
  return numbers.reduce((n, i) => n + i);
}

console.log(numbers1());

// 두번째로 배열 값을 제곱해주는 함수를 만들어보세요
// 결과는 [1, 4, 9, 16, 25] 나와야해요

const Num2 = () => {};

function numbers2() {
  return numbers.map((i) => i * i);
}

console.log(numbers2());
