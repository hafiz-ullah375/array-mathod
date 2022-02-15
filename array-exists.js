function megaFriends(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an array  of strings'
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'lion', 'sabbir', 'hafizullah']
const myBigBuddy = megaFriends(friends);
// console.log(myBigBuddy)
if (friends.indexOf('lion') != -1) {
    // console.log('lion exists')
}

if (friends.includes('lion')) {
    console.log('lion exists')
}
// concat
const first = [1, 2, 3, 4, 5,];
const second = [6, 7, 8, 9,];
const combined = first.concat(second);
console.log(combined);