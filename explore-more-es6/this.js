//🔹 constructor() হল একটা বিশেষ method, যেটা object তৈরি হওয়ার সময় স্বয়ংক্রিয়ভাবে কল হয়।
//this হল একটি keyword, যা function বা object-এর context অনুযায়ী নিজেকে বোঝায়।
// অর্থাৎ, কে কল করছে, তার উপর নির্ভর করে this এর মান।
// 🔹 এতে তুমি object তৈরি হওয়ার সময় property/মান সেট করতে পারো।
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log(`sleeping now ${this.name}`);
  }
  activitity() {
    this.sleep();
  }
}
const codom = new person("codom ali", 58);
console.log(codom);
codom.sleep();
const badam = new person("kacha badam");
badam.sleep();

//bejal
const lezy = codom.sleep;
lazy();
