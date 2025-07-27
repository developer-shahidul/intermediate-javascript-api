let a = 5;
function add(num1, num2) {
  const result = num1 + num2 + a;
  return result;
}
const sum = add(4, 5);
console.log(sum);
// a হলো Global Variable, যেকোনো ফাংশন থেকে অ্যাক্সেস করা যাবে
//num1, num2, result হলো Function Scope, বাইরে থেকে দেখা যাবে না
// prothome creat kore pore execute kore functon a call korle
