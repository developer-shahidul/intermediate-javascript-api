//
/**
 * 1....
 * you have an odd array(array with odd numbers). [1,3,5,7,9]. now conver this array into
 * an even array (array with even numbers).[2,4,6,8,10].Do this using for... loop and array.map()
 * method. hints: add one to any odd number and it will become an even number.
 */

// Map
const numbers = [1, 3, 5, 7, 9];
const evenNumber = numbers.map((x) => x + 1);
console.log("evenNumber :", evenNumber);
// for loop
let evenArray = [];
for (let i = 0; i < numbers.length; i++) {
  evenArray.push(numbers[i] + 1); //array number aer prottekbar index maner sathe 1 jug
}
console.log(evenArray);
/***
 * 2...
 * You are given an array say: [33,50,78,79,90,101,30].Now return/get all the element which are
 * divisible by 10 using array.filter() method.
 *
 * Now do the some text of question 2:But do this using array.find() method. Then compare the
 * output of question 2 and question 3.
 */

//filter
const serialNumber = [33, 50, 78, 79, 90, 101, 30];
const divisible = serialNumber.filter((p) => p % 10 === 0);
console.log("divisible by 10 :", divisible);

//find
const divisibleFind = serialNumber.find((p) => p % 10 === 0);
console.log("divisible by 10 :", divisibleFind);
/**
 * 3.....
 *  you have an array of objects:
 *
 * // const instructor = [
//   { name: "nodi", age: 28, position: "senior" },
//   { name: "Akhi", age: 22, position: "jonior" },
//   { name: "sobuj", age: 30, position: "senior" },
// ];
 *
 * your task is to display the instructor names that has the position senior using filter.
 * 
 */
const instructor = [
  { name: "nodi", age: 28, position: "senior" },
  { name: "Akhi", age: 22, position: "jonior" },
  { name: "sobuj", age: 30, position: "senior" },
];
const seniorPosition = instructor.filter((p) => p.position === "senior");
console.log(seniorPosition);

/**
 * 4...
 *const people = [
  { name: "meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

 * 1. follow above array of subjects. So , you have 3 object ass array element.Can you find out the    
 *    total sum from here. 20+15+25=57 . the out put will be 57
 *
 *   what are you thinking? Yeah! do it will for loop. I know you can do it. But wait!! wait!!! 
 *   do the same task using array.reduce() method 
 *
 */

// for loop
const people = [
  { name: "meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];
let sum = 0;
for (let i = 0; i < people.length; i++) {
  sum = people[i].age + sum;
}
console.log("sum age :", sum);

let sum2 = 0;
for (let person of people) {
  sum2 += person.age;
}
console.log("age :", sum2);

// reduce()
const totalAge = people.reduce((p, person) => p + person.age, 0);
console.log(totalAge);

// 👉 reduce() একটা array কে নিয়ে কাজ করে আর সব element মিলে একটা single value return করে।
// মানে → অনেকগুলো data → একটা ফলাফল
