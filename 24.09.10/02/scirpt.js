const a = Number(prompt("숫자를 적어주세요", "1-100"));
const b = Number(prompt("숫자를 적어주세요", "1-100"));
const result = a > b;

result ? alert(`${a}는 ${b}보다 큽니다`) : alert(`${a}는 ${b}보다 작습니다`);
