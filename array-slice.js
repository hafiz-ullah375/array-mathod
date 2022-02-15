const numbers = [2, 4, 5, 6, 7, 12, 23, 45, 32];
const numbersSliced = numbers.slice(4, 8);
// console.log(numbersSliced)
// const numberSplied = numbers.splice(4, 2);
// console.log(numberSplied)
// console.log(numbers)
const numberSplied2 = numbers.splice(4, 3, 99, 111, 222, 333)
console.log(numberSplied2)
console.log(numbers)