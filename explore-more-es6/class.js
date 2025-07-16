//
const products = [
  { id: 1, name: "lenovo", price: 65000 },

  { id: 2, name: "del", price: 45000 },

  { id: 3, name: "hp", price: 40000 },

  { id: 4, name: "mac", price: 165000 },
];

//has some properties, method
class product {
  conuntry = "bangladesh";
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}
const lenovo = new product("le le lenovo");
// console.log(lenovo);
// lenovo.speak("oba kita kow"); //call kora hoice

class teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log("sir is teaching math");
  }
}
const topon = new teacher("topon sir", "physics");
console.log(topon);
const rashid = new teacher("Rashid sir", "biology");
console.log(rashid);
rashid.lecture();
topon.lecture();

////////class////////////////
//constructor()	object বানানোর সময় নাম আর বিষয় set করে
// this.name	object-এর নাম
// this.subject	object-এর বিষয়
// lecture()	method যেটা কাজ দেখায়
