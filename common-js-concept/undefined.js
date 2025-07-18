/**
 *
 * 8 ways to get undefined
 * 1.. variable to that is not initiyalized will give undefined
 * 2.. function with no return
 * 3.. parameter that is not passed will be undefined
 * 4.. if return nothing on the ride side will return undefined
 * 5.. property that doesn't exists on an object will give you undefind
 * 6.. access ing array element outside of the index range
 * 8.. deleting an element inside an array
 * 9.. set a value directly to undefined
 *
 */
//1..
let first;
console.log(first);

//2..
function second(a, b) {
  const total = a + b;
}
const result = second();
console.log(result);

//3
function third(a, b, c, d) {
  const sum = a + b + c + d;
  console.log(a, b, c, d);
}
third(2, 4); // sudu 2 ta value dewa

//5
function noNegetive(a, b) {
  if (a < 0 || b < 0) {
    return; // ki return kora hobe bole nai tai undefined
  }
  return a + b;
}
const total = noNegetive(2, -5);
console.log(total);

//6
const fifth = { id: 1, name: "agun", age: 25 };
console.log(fifth.age, fifth.salary); // salary object a nai undefind

//7
const sixth = [4, 5, 8, 8, 7, 4];
console.log(sixth[3], sixth[7]); // akhane 7 number index man nai

//8
const eight = [4, 5, 8, 8, 7, 4];
// you should not do it. instead use splice
delete eight[2];
console.log(eight[2]);
console.log(eight);

// 9
const eighth = undefined;
const ninth = null;

const data = { results: [], update: null };
// console.log(typeof undefined);
console.log(typeof null); // object
