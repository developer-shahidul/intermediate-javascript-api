/**
 * var ,let ,const
 * defult para meter
 * template string
 * arrow function
 * destructuring and spread oparetor
 * Object.key, Object.values and Objcet.entries
 * for... of used in array and string
 * for....in loop used in object
 */

const a = 56;
const numbers = [56, 7, 8];
const person = {
  name: "sakib khan",
};
const massage = `hi, ${person.name} has a: ${a} access to number ${numbers[2]}`;
console.log(massage);

if (true) {
}
const square = (x) => x * x;
const sum = (a, b) => a + b;

//important
// destructuring object
const { age, z, ...others } = { x: 4, y: 5, z: 23, name: "object", age: 55 };

// destructuring array
const [first, second, ...remaining] = ["ranu", "jonu", "mono", "bono"];
