//
function greating(person) {
  console.log(person);
}
// const person = "halima khatun";
// const numbers = [70, 78, 45];
const laptop = { price: 12000, brand: "mac book", memory: "16 gb" };
// console.log(person);
// console.log(numbers);
console.log(laptop);

//ভেতরে কল করলে → wrapper চালানোর সাথে সাথে callback execute হয়।

// ভেতরে কল না করলে → wrapper শুধু callback function আর data রাখে, কিছু করে না। বাইরে থেকে আলাদা করে কল করতে হবে।

function greatingHand(greatingHandler, name) {
  greatingHandler(name); // judi valu ta function hoi taile call korte hobe  ()
}

function greatingMorning(name) {
  console.log("good morning", name);
}
function greatingEvening(name) {
  console.log("good evenig", name);
}
function greatingNight(name) {
  console.log("good night ", name);
}
greatingHand(greatingMorning, "tom joni");

greatingHand(greatingEvening, "tom Hanks");

greatingHand(greatingNight, "juhan burge");

// greatingHand(greatingHandler, );
// greatingHand(greatingHandler, "tom herry");

//
// document.getElementById("home-btn").addEventListener("click", function () {
//   console.log("submit button clicked");
// });

//
function submitHandler() {
  console.log("submit button clicked");
}
document.getElementById("home-btn").addEventListener("click", submitHandler);
