//1. write an arrow function that will take 3 parameters,will multiply
//   the parameters and will return the result

const doMath = (a, b, c) => a * b * c;
const result = doMath(2, 5, 6);
console.log(result);

//.2 write the following sentence in three lines and print the result:
// I am a developer. I love to code. I lobe eat biryani.
const sentence = " I am a developer. \n I love to code. \n I lobe eat biryani.";
console.log(sentence);

//3. write an arrow function that will take 2 parameters: One parameter
//   will come form you and the other parameter will be a defult parameter
//   and these parameters and return the result.

const add = (first, last = "islam") => first + last;
console.log(add("sojib "));
console.log(add("rakib ", "islam"));

//4. write an arrow function where it will do the following:
//  a) it will take an array where the array elements will be the
//      name of yours friends
//  b) check if the length of is element is even, push element
//     with even lenght to a new array and return the result
// print the result:

const evenLengthFriends = (friends) => {
  const evenFriends = [];
  for (const friend of friends) {
    if (friend.length % 2 === 0) {
      evenFriends.push(friend);
    }
  }
  return evenFriends;
};
const bondo = ["Sakib", "Rakib", "Tamima", "Jamal", "Nadime", "Raju"];
const myfriends = evenLengthFriends(bondo);
console.log(myfriends);

//5. write an arrow function where it will do the following:x²
//1. square each array element
//2. calculate the sum of the square element
//3. return the average of the sum of the squre element
//    print the result

// const squreSumAverage = (numbers) => {
//   let squere = [];
//   let sum = 0;
//   for (const number of numbers) {
//     const sq = number ** 2;
//     squere.push(sq);
//     sum += sq;
//   }
//   const average = sum / numbers.length;
//   return { squere: squere, sum: sum, average: average };//PURU AKTA OBJECT RETURN KORE
// };
// const num = [1, 2, 3, 4, 5, 6, 7, 8];
// const result2 = squreSumAverage(num);
// console.log(result2.squere); //[1, 4, 9, 16, 25, 36, 49, 64];

// console.log(result2.sum); //204
// console.log(result2.average); //25.5

// akto suto kore
/////////////////////
const squreSumAverage = (numbers) => {
  let sum = 0;
  for (let num of numbers) {
    const square = num ** 2;
    sum += square;
  } //🔸 এখানে square হল প্রতিটি সংখ্যার square মান (যেমন 2**2 = 4) — মানে এটা একটা সংখ্যা, আর তাই সরাসরি sum += square করে যোগ করা যায়।
  const average = sum / numbers.length;
  return average;
};

const number = [1, 2, 3, 4, 5, 6, 7, 8];
const result3 = squreSumAverage(number);
console.log(result3);

//6. write an arrow function where it will do the following:
//  a) it will take two array inputs
//  b) combine the two array and assign them in a new array
//  c) find the maxium number from the new array and return the result

//  print the result

const findMaxFromCombined = (array1, array2) => {
  const combined = [...array1, ...array2];
  const max = Math.max(...combined); //👉'...' , Array বা Object এর উপাদানগুলোকে ভেঙে ফেলা এবং আলাদা আলাদা করে অন্য জায়গায় রাখা।
  return max;
};
const arr1 = [4, 9, 2];
const arr2 = [7, 1, 2];
console.log(findMaxFromCombined(arr1, arr2));
