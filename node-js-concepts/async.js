// const myLoader = () => {
//   return new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//       resolve(0.3);
//     } else {
//       reject(0.7);
//     }
//   });
// };

const myLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();
    if (success <= 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};
myLoader()
  .then((data) => console.log("resolve data", data))
  .catch((error) => console.log("reject with value", error));

// error thakle ber korbe
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

///
// async bebohar korle then bebohar lage na
//call korte hoi

async function loadData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log(data);
}
loadData();

const taskLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log(data);
};
taskLoader();
