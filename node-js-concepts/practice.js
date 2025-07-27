/**
 *
 * a. write a function that displays a massage after 5s.
 * b. write a function called delayedGreeting() that takes 2 parameters, name and delay time and logs a greeting massage
 *    after the given delay time.
 * input : delayGreeting('alice',2000)
 * output: Hello, Alice!
 */
setTimeout(() => {
  console.log("massage after 5s");
}, 5000);

function delayedGreeting(name, delay) {
  setTimeout(() => {
    console.log(`Hello,${name}!`);
  }, delay);
}
delayedGreeting("alice", 2000);
//b

/**
 * 2...........
 * the function telljoke() below logs a funny massage every 2 second and after 10 seconds, it stops. Complet the code below
 * and see the output
 *
 *  function telljoke(){
 *console.log('why don't scientists trast atoms? Because they make up everything!');
 *               }
 *
 *const jokeInterval=setInterval(?,?);
 *
 * // after 10 seconds, stops telling joks
 * setTimeOut(()=>{}
 *  write code
 * },?);
 *
 */
const jokeInterval = setInterval(() => {
  console.log(
    "why don`t scientists trast atoms? Because they make up everything!"
  );
}, 2000);
setTimeout(() => {
  clearInterval(jokeInterval);
  console.log("no more joke");
}, 10000);

/**
 * 3........
 * write an async/await function that fetch data from an api and logs a message
 *
 * Input:https://v2jokeapi.dev/joke/programing?type=single
 * note : you can use an api of youe choice
 *
 * output: Two SQL tables sit at the bar.A query approaches and asks "Can I join you"
 *
 * note : output may change according to the api you used
 *
 */
async function loadUser() {
  try {
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?type=single"
    );
    const data = await res.json();

    console.log(data.joke);
  } catch (error) {
    console.error("❌ Failed to fetch joke:", error);
  }
}

loadUser();

/////////////////////////

let number = 0;
const intervalId = setInterval(() => {
  number++;
  console.log(number);
}, 2000);
setTimeout(() => {
  if (number < 10) {
    clearInterval(intervalId);
    console.log("⏹️ Interval stopped before reaching 10");
  }
}, 10000);
