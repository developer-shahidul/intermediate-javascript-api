// map ==> loop through each element of the array and do the oparation that you passed  in the Callback
//         function and hold the result from each oparation in an arary and finally returns you the array.

const numbers = [4, 5, 8, 9, 6, 1, 9];

//1..
// const doubled = [];
// doule kora
// for (const num of numbers) {
//   const double = num * 2;
//   doubled.push(double);
// }
// console.log(doubled);

//2...
function doubledIt(num) {
  //   console.log("num now", num);
  return num * 2;
}
const result = numbers.map(doubledIt); //map() মূল array-এর প্রতিটি উপাদানের উপর একটি ফাংশন চালায়,
// console.log(result); //নতুন একটি array তৈরি করে যার প্রতিটি উপাদান হলো সেই ফাংশনের return value।

//3... arrow
const double2 = (n) => n * 2;
const output = numbers.map(double2);
console.log(output);

//4......
const output2 = numbers.map((x) => x * 2);
console.log(output2);
