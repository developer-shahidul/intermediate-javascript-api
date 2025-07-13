//for... of use an array or string not in object
//for... in use object

const numbers = [1, 5, 4, 8, 7, 9, 6];
// for (let i = 0; i < numbers.length; i++) {}

//while
const number = [1, 5, 4, 8, 7, 9, 6];
for (let num of number) {
  //   console.log(num);
}

const nobab = "Siraj ud ullah";
for (const char of nobab) {
  //   console.log(char);
}

// Object are jono in bebohar hoi
const glass = { name: "glass", color: "gold", price: "12", isCleaned: true };
for (const key in glass) {
  //   console.log(key); // key man ta dibe
  const value = glass[key]; // '.' diya kaj hobe na karon ata property// ajonno [] disi
  //   console.log(value); // value dibe
}

// oftional object aer modde for... of  chalano
const glas = { name: "glass", color: "gold", price: "12", isCleaned: true };
const keys = Object.keys(glas);
for (const key of keys) {
  const value = glas[key]; // '.' diya kaj hobe na karon ata property// ajonno [] disi // key akta variable//
  //glas object-এর ভিতর যে property এর নাম key variable-এ আছে, তার value নাও।
  console.log(key, value);
}
