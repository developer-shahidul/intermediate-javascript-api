//// Parent class
//এক class আরেক class-এর property ও method "উত্তরাধিকার" হিসেবে পেলে — তাকে বলে Inheritance।
class Vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  move() {
    console.log("gari chole na chole na re");
  }
}

// Bus class extends Vehicle
class Bus extends Vehicle {
  constructor(name, price, seat, ticketPrice) {
    super(name, price);
    this.name = name;
    this.ticketPrice = ticketPrice;
  }
}
const greenLine = new Bus("Green Line", 5000000, 40, 1200);
console.log(greenLine);

// Truk class extends Vehicle
class Truk extends Vehicle {
  constructor(name, price, load) {
    super(name, price);
    this.load = load;
  }
}
const goodsTruck = new Truk("Tata Truck", 7000000, "5 tons");
console.log(goodsTruck);
