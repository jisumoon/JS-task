// 🚀3개의 숫자 중 가장 작은 값 찾기🤷‍♂️
// 사용자에게 자연수 3개를 입력받습니다. => 0은 자연수가 아니다.

// 3개의 숫자가 삼각형 각 변의 길이라고 가정합시다.
// 이 숫자로 삼각형을 만들 수 있다면, 콘솔창에 "YES"라는 단어가,
// 만약 불가능하다면 "NO"라는 단어가 출력되도록 해주세요! 😎 // 취소를 눌러도 no!!

// 예시) 사용자가 6, 7, 11의 숫자를 입력한다면,
//콘솔창에 YES라는 문자가 출력되어야 합니다.

//만약 13, 33, 17의 숫자를 입력한다면,
// 콘솔창에 NO라는 문자가 출력되어야 합니다.

// *참고 : 삼각형이 되려면 반드시 두 변의 길이의 합이 나머지 한 변의 길이보다 커야 합니다.

// a,b,c => a + b > c
//       => a + c < b
//       => c + b < a
// if / else ?

//1. 사용자에게 3개의 숫자를 받는다.

//2. a,b,c 의 각각의 숫자의 값을 알고 싶다. => 따로따로 아는 것도 있지만.. 배열은??

//3. 그 숫자 중에서 두가지 수의 길이의 합이 나머지 길이보다 커야한다.

//3-1. 두가지 수의 길이의 합을 비교해보고 결정해야한다.

//4. 크다면, yes

//5. 작다면, no

//1. 풀이

// const a = Number(prompt(`첫번째 숫자를 적어주세요`));
// const b = Number(prompt(`두번째 숫자를 적어주세요`));
// const c = Number(prompt(`세번째 숫자를 적어주세요`));

// if (a + b > c && a + c > b && b + c > a) {
//   alert("Yes");
// } else {
//   alert("No");
// }

// 문제점
// 사용자가 입력한 값에 0이 포함될 수 있음.
// 사용자가 입력한 값에 0이 포함되면 거절하고 싶음 => 내가 원하는 대로 쓰면 길어지는데.. //for?

//2. 풀이

const num = ["첫번째", "두번째", "세번째"];

let arr = [];

for (let i = 0; i < num.length; i++) {
  let userNumber = Number(prompt(`${num[i]} 숫자를 적어주세요`));
  if (userNumber <= 0 || isNaN(userNumber) || userNumber === null) {
    alert("다시 입력하세요");
  } else {
    arr.push(userNumber);
  }
}

arr = [a, b, c];

if (a + b > c && a + c > b && b + c > a) {
  alert("Yes");
} else {
  alert("No");
}

// 문제점
// 다시 되돌아가고 싶다 ㅠ_ㅠ
// 취소하거나, 잘못쓰면 처음부터 쓰고 싶은데.. 그 문법은 뭐지..??