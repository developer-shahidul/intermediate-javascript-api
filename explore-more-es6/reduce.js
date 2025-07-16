//
const numbers = [2, 4, 5, 8, 7, 9, 12, 15];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);
//
const sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum);
//🔸 এখানে তুমি initialValue হিসেবে 0 দিয়েছো
//🔹 এখানে p প্রথমবার 0 হবে (initialValue), আর c হবে প্রথম উপাদান (2)
//🔹 তারপর: p + c = 0 + 2 = 2 → এটা পরের রাউন্ডে আবার p হবে
//🔹 previous = আগ পর্যন্ত যোগফল
// 🔹 current = এই মুহূর্তের সংখ্যাটি
