//num1을 프롬프트로 입력받아서 if 문으로 num1이 10보다 크거나 같으면
// "num1은 10보다 크거나 같습니다"를 출력하고, 작으면 "num1은 10보다 작습니다"를
// 출력해주세요.

const num1 = Number(prompt("숫자를 적어주세요", "1"));

if (num1 >= 10) {
  console.log("num1은 10보다 크거나 같습니다");
} else if (num1 <= 10) {
  console.log("num1은 10보다 작습니다");
}
