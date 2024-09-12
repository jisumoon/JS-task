let name = prompt("이름을 적어주세요");
let height = parseInt(prompt("키를 적어주세요"));
let weight = parseInt(prompt("몸무게를 적어주세요"));
const result = (height - 100) * 0.9; // 키에 적정한 체중

alert(
  weight >= result - 5 && weight <= result + 5
    ? `${name} 적정 체중입니다.`
    : `${name} 적정 체중이 아닙니다.`
);

// const corret = result - 5 < weight < result + 5;

// corret ? alert(`${name} 적정체중입니다`) : alert(`${name} 적정체중이 아닙니
