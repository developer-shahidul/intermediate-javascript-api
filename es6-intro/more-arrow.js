const difference = (x, y) => x - y;
const multyply = (first, second, third) => first * second * third;

//single parameter or one parameter
const student = { name: "sojib", age: 29 };
const getAge = (person) => person.age; // person key aer bitorer age key aer value daw //object aer jonno

const age = getAge(student);
console.log(age);

const getThird = (number) => number[2];
const third = getThird([4, 5, 8, 58, 7, 8, 23, 5]);
console.log(third);

const dobleIt = (num) => num * 2;

//no parameter
const getPI = () => Math.PI;
console.log(getPI());

//large arrow function . if you want to ger returned from thes function.
// then you have use the return keyword.

const doMath = (x, y, z) => {
  const sum = x + y + z;
  const mult = x * y * z;
  const result = sum + mult;
  return result;
};

// Regular Function:
//this.name জাভাস্ক্রিপ্টে এমন একটি এক্সপ্রেশন যেটা this কিওয়ার্ড দিয়ে কোনো অবজেক্টের name প্রপার্টিতে রেফার করে।
const obj = {
  name: "rofik",
  show: function () {
    console.log(this.name);
  },
};
obj.show();
// কিন্তু অ্যারো ফাংশনে this কাজ করে না আগের মতো: undefind dekhabe
// const obje = {
//   name: "allow borta",
//   sayName: () => {
//     console.log(this.name);
//   },
// };
// obj.sayName();

//সেরা practice:
const object = {
  name: "dail chur",

  view() {
    console.log(this.name);
  },
};
object.view();

//
function greatGenarator(name) {
  return function () {
    console.log("Hellow " + name + "!");
  };
}
const greatAli = greatGenarator("Ali");
const greatMasud = greatGenarator("Masud");
greatAli();
greatMasud();

// aerrow function
const arrowpractic = (name) => console.log("hellow " + name + "!");
arrowpractic("sobuj");

// 🔹 Regular function আগে থেকে define না করেও call করা যায় (Hoisted হয়):
great();
function great() {
  console.log("hi this is not me");
}

//🔹 Arrow function Hoisting হয় না:
// hellow();
// const hellow = () => {
//   console.log("you r right");
// };

// ✅ ৩. Constructor হিসেবে ব্যবহার
// 🔹 Regular Function দিয়ে object তৈরি করা যায়:
function person(name) {
  this.name = name;
}
const p = new person("kalu");
console.log(p);

//🔹 Regular function-এর ভিতরে arguments keyword কাজ করে:
function test() {
  console.log(arguments);
}
test(1, 2, 3);
//arguments মূলত একটা ফাংশনে কয়টা এবং কি কি মান (value) পাঠানো হয়েছে, সেগুলোর সব list ধরে রাখে

// arguments হচ্ছে array-like, কিন্তু এটা array না। তাই .map(), .forEach() কাজ করে না।

// এতে তুমি index দিয়ে access করতে পারো: arguments[0], arguments[1], ইত্যাদি।

// .length প্রপার্টি আছে: arguments.length

//🔹 Arrow function-এ arguments থাকে না:
// const test = () => {
//   console.log(arguments); // ❌ ReferenceError
// };
