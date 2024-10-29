const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr 모든 값 출력

arr.forEach((n) => console.log(`${n - 1}의 숫자 : ${n}`));

// arr 두배인 배열 만들어서 arr1이라는 변수에 넣기

const arr1 = arr.map((n) => n * 2);
console.log(arr1);

// arr에서 짝수만 arr2라는 변수에 넣기

const arr2 = arr.filter((n) => n % 2 === 0);
console.log(arr2);

// arr2에서 5보다 큰 숫자 중 첫번째 값만 출력하기

const arr3 = arr2.find((n) => n > 5);
console.log(arr3);

// arr에서 오름차순으로 출력하기

const arr4 = arr.sort((a, b) => a - b);
console.log(arr4);

// arr에서 내림차순으로 출력하기

const arr5 = arr.sort((a, b) => b - a);
console.log(arr5);

// arr 값 모두 더하기

const arr6 = arr.reduce((a, b) => {
  return a + b;
});
console.log(arr6);
