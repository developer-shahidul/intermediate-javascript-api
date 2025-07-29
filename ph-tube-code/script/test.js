const isverified = "";
// if (isverified == true) {
//   console.log("users is verified");
// } else {
//   console.log("user is not verified");
// }
console.log(
  `${isverified === true ? "users is verified" : "user is not verified"}`
);

// get hour and rest time
function getTimeString(time) {
  const hour = parseInt(time / 3600);
  const remainingSecond = time % 3600;
  const minite = parseInt(remainingSecond / 60);
  const second = parseInt(remainingSecond % 60);

  return `${hour} Hour ${minite} minites ${second}`;
}
getTimeString(7265);
// const hour = parseInt(7265 / 3600) → 2

// const remainingSecond = 7265 % 3600 → 65

// const minute = parseInt(65 / 60) → 1

// const second = 65 % 60 → 5
