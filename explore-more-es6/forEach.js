const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers.forEach((n) => console.log(n)); //
console.log(result); //undefined
//forEach() হল একটি array method যা একটি ফাংশন চালায় প্রতিটি array উপাদানের জন্য, কিছু না রিটার্ন করে।
const result2 = numbers.forEach((n) => {}); //
