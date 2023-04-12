const numbers = [10, 20, 30, 40, 50, 60];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
// 	sum += numbers[i];
// }
// const average = sum / numbers.length;
// console.log('average', average);

// numbers.forEach((num) => (sum += num));

// for (const num of numbers) {
// 	sum += num;
// }
// console.log(sum);

// const result = numbers.reduce((prev, curr) => {
// 	return prev * curr;
// }, 1);

// console.log(result);

// const revArray = numbers.reverse();
// console.log(revArray);

const diffNumber = [1, 0, 45, 20, 56, 45, 78, 10, 20];
// const sorted = diffNumber.sort((a, b) => b - a);
// console.log(sorted);

const filteredNumbers = diffNumber.filter((number) => number >= 4000);
console.log(filteredNumbers);
// const findNumber = diffNumber.find((number) => number === 45);
// console.log(findNumber);
// const filterNumberDouble = diffNumber.filter((number) => number === 45);
// console.log(filterNumberDouble);

const doubled = diffNumber.map((number) => number * 2);
console.log(doubled);
