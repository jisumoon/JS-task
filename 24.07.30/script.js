let arr = [];

for (let i = 0; i < 3; i++) {
  const userNumber = Number(
    prompt("1에서 100까지의 자연수 3개를 순서대로 써주세요")
  );
  arr.push(userNumber);
}

const [a, b, c] = arr;

let minNumber;

if (a < b) {
  minNumber = a;
} else if (b > a) {
  minNumber = b;
} else if (a > c) {
  minNumber = c;
}

alert(`사용자가 제출한 숫자 중 ${minNumber}이(가) 제일 작은 수 입니다.`);
