// //setInterval and clearInterval

// console.log(1);
// console.log(2);
// // // console.log(3)
// // // setTimeout(() => {
// // //   console.log(3);
// // // });

// // // setTimeout() জাভাস্ক্রিপ্টের একটা ফাংশন যা একবার নির্দিষ্ট সময় পরে কোনো কোড রান করাতে ব্যবহার হয়।
// // setTimeout(() => {
// //   console.log(3);
// // }, 2000); //2s pore dekhabe , niche dekabe

// console.log(4);
// console.log(5);
// console.log(6);

//.2..................+

//setInterval() জাভাস্ক্রিপ্টের একটা ফাংশন যা নির্দিষ্ট সময় অন্তর বারবার কোনো কোড রান করাতে ব্যবহার হয়।
// setInterval(() => console.log(" i m u"), 2000); // 2s porpor cholte oi thakbe

let number = 0;
// setInterval(() => {
//   number++;
//   // number += 1;
//   // number = number + 1;
//   // console.log(number);
// }, 2000); // 2s porpor cholte oi thakbe

// const clockId = setInterval(() => {
// number++;
// number += 1;
// number = number + 1;
// console.log(clockId, number);
// }, 2000); // 2s porpor cholte oi thakbe
// /akhane clockId sonkha poriborton hobe na sudu number poribortito hobe

//.3...................

const clockId = setInterval(() => {
  number++;
  // console.log(clockId, number);
  if (number > 10) {
    clearInterval(clockId);
  }
  console.log(clockId, number);
}, 2000); // 2s porpor cholte oi thakbe

//10 porjonto cholbe
