//
//const name = {keys : 'value', keys : 'value' ,keys : 'value'}

const glass = { name: "glass", color: "gold", price: "12", isCleaned: true };
const keys = Object.keys(glass); // all property names
console.log(keys); //[ 'name', 'color', 'price', 'isCleaned' ]

const value = Object.values(glass); // all property value
console.log(value); //[ 'glass', 'gold', '12', true ]

const entries = Object.entries(glass); //Returns an array of key/values of the enumerable own properties of an object
console.log(entries); // jura jura dibe
//array of array , two dimentional array
// [
//   [ 'name', 'glass' ],
//   [ 'color', 'gold' ],
//   [ 'price', '12' ],
//   [ 'isCleaned', true ]
// ]

const { isCleaned, ...shortGlass } = glass;
console.log(shortGlass, isCleaned);
// akhane iscleaned ke bag kora hoice ,baki sob gulu property ke  ...shortGlass a rakha hoice

// delete
delete glass.isCleaned;
console.log(glass);

//freeze
// Object.freeze(glass); //✅ তুমি object-এর ভিতরের কোনো property change, add বা delete করতে পারবে না।

// glass.source = "Bangladesh";
// glass.price = 50000;
// delete glass.name;
// console.log(glass);

// //seal
// Object.seal(glass); // sudu value update kora jai
// glass.source = "Bangladesh";
// glass.price = 50000;
// delete glass.name;
// console.log(glass);
