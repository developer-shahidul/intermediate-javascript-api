//
function sum(a, b, c) {
  //   console.log(arguments);
  //   console.log(arguments[3]);
  //   console.log(typeof arguments);//object
  //   arguments.push(65); //error dibe
}
// console.log(arguments) // ata bahire hobe na
const total = sum(45, 45, 29, 98, 18, 35); // ja value diya call kora hobe oitai argument
// console.log(total);

function add(a, b, c) {
  const argu = [...arguments];
  console.log(argu);
}
const result = add(45, 45, 29, 98, 18, 35);
// console.log(typeof add);
console.log(add.length); //3 ta parameter ace
