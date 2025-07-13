// var : no reson to use var
// let : Allow it to reassign // man poribortito hobe
// const: don't allaw it to reassign // man poribortito hobe

const money = 25;
//money=50;
const rich = money + 50;
console.log(rich);

// const paysa = 40;
// paysa = paysa + 10;
// console.log(paysa);
//TypeError : Assignment to constant variable.

let paysa = 40;
paysa = paysa + 10;
console.log(paysa);

const numbers = [55, 48, 56, 78, 54, 35];
// numbers = [45, 5, 85, 2, 89, 7]; // reasign kora jabe na bitorer kiso poriborton kora jabe
numbers[1] = 25;
numbers.push(1, 2, 6, 5, 4, 8);
console.log(numbers);

// Object
const student = {
  name: "sumi",
  class: 12,
};
student.name = "moiyur konthi";
// student = { name: "kokil konthai" }; //not reasign
console.log(student);

let students = {
  name: "sumi",
  class: 12,
};
students = { name: "kokil konthai" };
console.log(students);

// judi judi const diys variable diclare koro taile tar bitorer man poriborton kora jai
//  kinto sorasori Object thoba Array man  poriborton kora jai na

// loop
// const sum = 0; // not reasign
let sum = 0;
for (let i = 0; i < 10; i++) {
  const num = i;
  sum = sum + num;
}
console.log(sum);
