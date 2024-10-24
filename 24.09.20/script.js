// let userAge = Number(prompt("나이를 적어주세요"));

// // user>20
// //     20< user < 30
// //     31 <user

// const result =
//   20 <= userAge
//     ? 30 > userAge
//       ? alert("당신은 20대입니다.")
//       : alert("당신은 30대입니다.")
//     : alert("당신은 20대 이하이군요");

for (let i = 2; i < 10; i++) {
  for (let k = 1; k < 10; k++) {
    document.body.innerHTMt += `${i} * ${k} = ${i * k}`;
  }
}
