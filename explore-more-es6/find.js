// find() শুধু প্রথম মিল পাওয়া একটি মান return করে
// কখনোই array return করে না
//🔸 যদি কিছুই না মেলে → return করে undefined

const players = [78, 55, 68, 76, 89, 92];
// const selected = players.find((x) => x > 70);
const selected = players.find((x) => x > 98);

console.log(selected);
const friends = ["tomi", "joni", "rabibokul", "sakibul", "sobul", "tim"];
const result = friends.find((p) => p.length > 4);
console.log(result); //rabibokul
