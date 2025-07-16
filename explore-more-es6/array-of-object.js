//
const products = [
  { id: 1, name: "lenovo", price: 65000 },

  { id: 2, name: "del", price: 45000 },

  { id: 3, name: "hp", price: 40000 },

  { id: 4, name: "mac", price: 165000 },
];

//map()
const names = products.map((p) => p.name);
console.log(names);
const name = products.map((p) => p.price);
console.log(name);

// forEach()
products.forEach((p) => console.log(p.id));

///filter()
const expensive = products.filter((p) => p.price > 50000);
console.log(expensive);

//find()
const affordable = products.find((p) => p.price > 50000);
console.log(affordable); // sudu 1st jeta milbe oi ta dibe

//reduce
const total = products.reduce((acum, current) => acum + current.price, 0);
console.log(total);
