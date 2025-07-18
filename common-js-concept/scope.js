//
function add(a, b) {
  const totoal = a + b;
  //   console.log(a, b);
  if (b > 5) {
    const sum = 25 + a + b; // ব্লক scope (শুধু if ব্লকের মধ্যে কাজ করবে)
  } else {
    const sum = 5 + a + b; // ব্লক scope
    var current = sum; // var → function scope (পুরো function এ available)
  }
  //   console.log(sum);
  console.log(current); // এখানে current থাকবে (কিন্তু শুধু else ব্লক execute হলে value আসবে)
  return totoal;
}
// console.log(a, b); // a is not defined
// console.log(totoal); // a is not defined
// add(5, 7);//undefined
add(5, 3); //13
