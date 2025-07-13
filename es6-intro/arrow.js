// function declaraction

// function add(a, b) {
//   const sum = a + b;
//   console.log(sum);
//   return sum;
// }
// const result = add(4, 6);
// console.log(result);

function add(a, b) {
  return a + b;
}
const sum = add(4, 6);
console.log(sum);

// function expression
const add2 = function (a, b) {
  return a + b;
};

//arrow function
const add3 = (a, b) => a + b;
const sum2 = add3(4, 5);
console.log(sum2);

const multyply = (num1, num2) => num1 * num2;
const multd = multyply(12, 3);
console.log(multd);

// const name = (parameter,(a, b) ) => (return) a + b; /return r parameter lekha lage na
