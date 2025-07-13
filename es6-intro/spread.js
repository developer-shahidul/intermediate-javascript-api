const max = Math.max(2, 6945, 69, 99, 9998, 749, 42, 69, 4, 4, 94);
// console.log(max);

const numbers = [2, 5, 45, 4, 56, 5, 8, 7, 8, 5, 12, 4];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);
// console.log(...numbers); // array theke sonkha gulu ber kore dei, array r thake na
// number theke max number khujte '... ' dite hoi

//use spread oparetor to copy
const nums = [4, 12, 3, 56, 48, 15];

const num2 = nums;
num2.push(12);
console.log(nums);

// spread = [...] //এখানে [...] হচ্ছে Spread Operator — আর এই কোডের মাধ্যমে তুমি friends array এর একটা shallow copy তৈরি করছো।
const friends = [4, 12, 3, 56, 48, 15];

const bondo = friends;
const dusto = [...friends];

console.log("dusto", dusto);
friends.push(100);
console.log("friend", friends);

// advance
const sonkha = [...friends, 999]; // add extra element while copy
console.log(sonkha);

//✅ মেলানো (Merge করা):
const a = [1, 5];
const b = [3, 5];
const result = [...a, ...b];
console.log(result); //[ 1, 5, 3, 5 ]

//🔹 3. Function এর arguments এ ব্যবহৃত (একাধিক মান পাঠাতে)
function add(x, y, z) {
  return x + y + z;
}

const number = [1, 2, 3];
console.log(add(...number)); // 6

//Spread
let arr = [1, 2, 3];
let newArr = [...arr]; // Spread (expand করে নিচ্ছে)

// rest
function show(...values) {
  console.log(values);
}
show(1, 2, 3);
