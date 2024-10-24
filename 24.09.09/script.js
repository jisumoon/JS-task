let answer = Number(prompt("받은 점수를 알려주세요", "0~100"));

let grade;

switch (true) {
  case answer >= 90 && answer <= 100:
    grade = "A등급";
    break;

  case answer >= 80 && answer <= 89:
    grade = "B등급";
    break;

  case answer >= 70 && answer <= 79:
    grade = "C등급";
    break;

  case answer >= 60 && answer <= 69:
    grade = "D등급";
    break;

  case answer >= 0 && answer <= 59:
    grade = "F등급";
    break;

  default:
    alert("다시적어주세요");
}

alert(`${answer}점은 ${grade} 입니다`);

// return 과 break

// let answer = Number(prompt("받은 점수를 알려주세요", "0~100"));

// if (answer >= 90) {
//   alert("A등급");
// } else if (answer >= 80  {
//   alert("B등급");
// } else if (answer >= 70 ) {
//   alert("C등급");
// } else if (answer >= 60 ) {
//   alert("D등급");
// } else if (answer >= 0 ) {
//   alert("F등급");
// }

// 두ㅣ 에 있는 부분 생략해도 가능

// const score = Number(prompt("점수를 입력해주세요"));
// let grade = "";

// switch (parseInt(score / 10)) {
//   case 10:
//   case 9:
//     grade = "A등급";
//     break;
//   case 8:
//     grade = "B등급";
//     break;
//   case 7:
//     grade = "C등급";
//     break;
//   case 6:
//     grade = "D등급";
//     break;
//   default:
//     grade = "F등급";
// }

// alert(`당신의 학점은 ${grade}입니다!`);
