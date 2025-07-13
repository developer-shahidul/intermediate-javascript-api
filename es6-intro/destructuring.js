// object destructring
const actor = {
  name: "Ananta",
  age: 30,
  phone: "017234567",
  balance: 545658646,
};

//if right side an object left side of destructring will be
// object ad well

//use property name as a variable that contains the property value
const { phone, age } = actor;
/**
 * actor object-এর ভেতর থেকে phone এবং age নামের property-গুলোকে ভেঙে এনে দুইটা আলাদা variable বানানো হলো।
 * const phone = actor.phone;
   const age = actor.age;
 */
// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(age);
console.log(age);
console.log(age);

// array destructring
const numbers = [45, 99];
const [first, second] = numbers;
const [x, y] = [12, 66];

function doubleThem(a, b) {
  return [a * 2, b * 2];
}
const [one, two] = doubleThem(6, 9);
console.log(one, two);
