// == check kore man thik ace ne
// === check kore man and  type (string etc)
// always use ===
// equal comparison doesn't work for non-primitive ( object , array agulu non-primitive)
const first = [];
const second = [];
if (first === second) {
  console.log("value are equal");
} else {
  console.log("value are not equal");
}

// //✅ 1. == (Loose Equality / Abstract Equality)
// == ব্যবহার করলে টাইপ কনভার্সন (type coercion) করে তুলনা করে।
// মানে যদি দুইটার টাইপ আলাদা হয়, JavaScript আগে একটা টাইপ কনভার্ট করে তারপর মিলিয়ে দেখে।

// console.log(5 == "5");       // true  (string কে number এ কনভার্ট করে)
// console.log(true == 1);      // true  (true → 1)
// console.log(false == 0);     // true  (false → 0)
// console.log(null == undefined); // true (special case)
// console.log("0" == false);   // true  ("0" → 0, false → 0)
// null == 0               // false, null is not converted to 0

//✅ 2. === (Strict Equality)
// === ব্যবহার করলে কোনো টাইপ কনভার্সন করে না।
// মানে ভ্যালু আর টাইপ দুটোই মিলতে হবে।

// console.log(5 === "5"); // false (টাইপ আলাদা: number vs string)
// console.log(5 === 5); // true  (টাইপ আর ভ্যালু দুটোই same)
// console.log(true === 1); // false (boolean vs number)
// console.log(null === undefined); // false (টাইপ আলাদা)
// console.log("0" === false); // false (string vs boolean)

//nan
console.log(NaN == NaN); //false
console.log(isNaN(NaN)); //true
