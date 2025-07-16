// filter selects element based on a condition and return an array
// with the elements that fullfilled the condition.
const numbers = [12, 13, 16, 15, 14, 19, 10];
const players = [78, 55, 68, 76, 89, 92];
// const selected = players.filter((p) => p > 70);// 70 aer boro jara tarare daw
// const selected = players.filter((p) => p > 99);
// const selected = players.filter((p) => p > 50);
// const selected = players.filter((p) => p % 2 === 1);// bejur
const selected = players.filter((p) => p % 2 === 0); // jur

console.log(selected);
//
const friends = ["tomi", "joni", "rabibokul", "sobul", "oliver", "tim"];
const oddFriend = friends.filter((p) => p.length > 4);
console.log(oddFriend);
