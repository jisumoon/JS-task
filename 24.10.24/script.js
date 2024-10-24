const animals = ["ant", "bison", "camel", "duck", "elephant"];

// 1, ["ant", "bison", "camel", "duck", "elephant"]
// 1-1. undefined 사용
const animals1 = animals.slice(undefined, 5);
console.log(animals1);

// 1-2. 양수 사용
const animals2 = animals.slice(0, 5);
console.log(animals2);

// 1-3. 음수사용
const animals3 = animals.slice(-5);
console.log(animals3);

// 2, ["duck", "elephant"]
// 2-1. 양수 사용
const animals4 = animals.slice(3);
console.log(animals4);

// 2-2. 음수 사용
const animals5 = animals.slice(-2);
console.log(animals5);

// 3, ["camel", "duck", "elephant"]
// 3-1. 양수 사용
const animals6 = animals.slice(2);
console.log(animals6);

// 3-2. 음수 사용
const animals7 = animals.slice(-3);
console.log(animals7);

// 4, ["camel", "duck"]
// 4-1. 양수 사용
const animals8 = animals.slice(2, 4);
console.log(animals8);

// 4-2. 음수 사용
const animals9 = animals.slice(-3, -1);
console.log(animals9);

// 5, []
const animals10 = animals.slice(5);
console.log(animals10);

// 6, ["elephant"]
// 6-1. 양수 사용
const animals11 = animals.slice(4);
console.log(animals11);

// 6-2. 음수 사용
const animals12 = animals.slice(-1);
console.log(animals12);

// 7, ["ant"]
// 7-1.undefined 사용
const animals13 = animals.slice(undefined, 1);
console.log(animals13);

// 7-2. 양수 사용
const animals14 = animals.slice(0, 1);
console.log(animals14);

// 7-3. 음수 사용
const animals15 = animals.slice(-5, -4);
console.log(animals15);
