//
function kitchen() {
  let rost = 0;
  return function () {
    rost++;
    return rost;
  };
}
const firstServed = kitchen();
console.log(firstServed());
console.log(firstServed());
console.log(firstServed());
console.log(firstServed());
