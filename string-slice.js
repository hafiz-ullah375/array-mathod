// split
const anthem = 'Amar shonar bangla ami tomai valobashi';
const word = anthem.split(' ');
const withOutA = anthem.split('a')
// console.log(withOutA)
// slice
const smallSlice = anthem.slice(5, 13)
// console.log(smallSlice)
// substr
const anotherPart = anthem.substr(5, 7)
// console.log(anotherPart)
// subString
const anotherPart2 = anthem.substring(11, 15)
// console.log(anotherPart2)

// concat
const first = 'amader';
const second = 'city';
// const fullstring=first+second;
const fullstring = first.concat(second).concat('abc ').concat(' you can add more and more')
// console.log(fullstring)
const words2 = ['a', 'b', 'c', 'd', 'e']
// const allJoin = words2.join('');
// const allJoin = words2.join(' ');
const allJoin = words2.join(' , ');

console.log(allJoin)
