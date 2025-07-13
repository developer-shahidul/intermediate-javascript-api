//default ==> if value is not provided, take this as a default.

function add(num1 = 44, num2 = 0) {
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}
// const sum = add(10, 15);
// const sum = add(4);
const sum = add();

///////////IMPORTANT//////////////

// numbers aer khetre sadaron man = 0;
// numbers sara onno kiso hole man ='';
// judi array parameter hoi taile = [];
// judi object parameter hoi = {};

function fullName(first, last = "") {
  const full = first + "" + last;
  return full;
}
function friends(numbs = []) {}
function person(human = {}) {}
