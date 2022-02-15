const numbers = [6, 4, 7, 1, 3, 9, 2, 5, 8];
const sortedNumber = numbers.sort();
// console.log(sortedNumber)
const friends = ['kabil', 'joshim', 'razzak', 'anwar', 'depjol', 'badsha'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends)
// const reversedFriends = friends.reverse()
// console.log(reversedFriends)
const sortReversedFriends = friends.sort().reverse();
// console.log(sortReversedFriends)
// number sorting fun
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumber = bigNumbers.sort(function (a, b) {
    return a - b;
})
console.log(sortedBigNumber)