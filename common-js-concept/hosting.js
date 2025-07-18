//
// print5();
console.log(print10);
print10();
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log("outside :", i); // var scop aer bahire chole jai

for (let i = 0; i < 5; i++) {
  //   console.log(i);
}
// console.log("outside :", i); // let scop aer bahire jai na  // i is not defined

//3....
//👉 Function Declaration hoisting পুরো ফাংশনটাকেই উপরে তুলে দেয়।
// তাহলে আসলে JavaScript রান করার আগে এরকম হয়:

function print5() {
  console.log("inside print 5 :", 5);
}

//4..
// const print10 = function () {
//   console.log("inside print10 :", 10);
// };
var print10 = function () {
  console.log("inside print10 :", 10);
};

// //✅ সংক্ষেপে
// ✔ Function declaration hoist → পুরো ফাংশন উপরে যায় (আগে কল করলে কাজ করে)
// ✔ Function expression (var/let/const দিয়ে) hoist → শুধু ডিক্লেয়ার হয়, value পরে assign হয়
// ✔ var function scoped → বাইরে থেকেও অ্যাক্সেস করা যায়
// ✔ let/const block scoped → বাইরে অ্যাক্সেস করা যায় না
