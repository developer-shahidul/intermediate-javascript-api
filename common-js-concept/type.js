// strongly typed language

// int a =5; // intizer
// string b ='alim halim khalim';
// bool c=true;
// object student={name: 'nayan',id:'55'};
// int[]numbers=[12,45,78];
// string []friends=['Abul, Babul'];

// daynamic is a dynamic typed language

//primitive type value
const a = 5;
const b = "samsu kupai na akhon r";
const d = true;

// non-primitive value
const ages = [45, 65, 78];
const student = { id: 23, class: 7 };
// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = { job: "job developer" };
let q = p;
console.log(p, q); //{ job: 'job developer' } { job: 'job developer' }

q = { job: "backend" };
console.log(p, q); //{ job: 'job developer' } { job: 'backend' }

//object aer value poriborton korle 2 ta man oi poriborton hoi

let c = { job: "job developer" };
let e = c;
e.job = "front end developer"; // object aer man change korele 2 ta man poriborton hobe
console.log(c, e); //{ job: 'front end developer' } { job: 'front end developer' }

// Primitive মানে একেবারে বেসিক ডেটা টাইপ – এগুলো immutable (পরিবর্তন করলে নতুন ভ্যালু তৈরি হয়)।

// JavaScript-এ Primitive টাইপ ৭টা –
// Number → যেমন 10, 3.14, -5
// String → যেমন "Hello", 'ABC'
// Boolean → true বা false
// Undefined → কোনো ভ্যারিয়েবল ডিক্লেয়ার করা আছে কিন্তু ভ্যালু নাই
// Null → খালি ভ্যালু
// Symbol → ইউনিক আইডেন্টিফায়ার তৈরি করতে
// BigInt → খুব বড় ইন্টিজার নাম্বার
///////////////////////////////////////////////////////////////////////////////////

// Non-Primitive মানে অবজেক্ট বা কালেকশন টাইপ ডেটা। এগুলো mutable এবং by reference কাজ করে।

// JavaScript-এ Non-Primitive টাইপ:
// Object
// Array
// Function
// Date
// RegExp ইত্যাদি

/***
 * ✅ সহজভাবে পার্থক্য
বিষয়	                Primitive	                   Non-Primitive

ডেটা	                সিম্পল ভ্যালু	                  অবজেক্ট/কালেকশন
মেমোরি	               ভ্যালু সরাসরি স্টোর হয়	         রেফারেন্স (address) স্টোর হয়
Immutable?	           হ্যাঁ	                         না
Copy করলে	          নতুন কপি হয়	                 একই রেফারেন্স শেয়ার হয়
 */
