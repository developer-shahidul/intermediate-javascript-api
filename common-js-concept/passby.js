//primitiver aer khetre name poribortion hoi na
// primitive types are pass by value.

let num1 = 5;
let num2 = 7;
function multiply(a, b) {
  a = 27;
  const result = a * b;
  return result;
}
console.log(num1); // num1 aer man poriborton hoi ne
const output = multiply(num1, num2);
console.log(output);

// non primitive aer  khetre name poribortito hoi
// jonkhon function aer bitore kono index judi modify koro taile  outer scop a object othoba array aer bitorer
// ongsho o change korbe
//object and array are pass bay rafarance

let student1 = { name: "jalil", patner: "borsha" };
let student2 = { name: "ran", patner: "anika" };

function makeMovies(couple1, couple2) {
  couple1.name = "ononto"; // name poriborton
  couple2.name = "mom";
}
console.log(student1, student2); // age kono poribortion nai
makeMovies(student1, student2);
console.log(student1, student2); // name poribortito hoice
