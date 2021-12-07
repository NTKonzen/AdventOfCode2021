// const data = require("./fakeData");
const data = require("./data");

const sorted = data.sort((a, b) => a - b);

let max;

for (let sortedPos of sorted) {
  let fuelAmount = 0;
  for (let pos of data) {
    fuelAmount += Math.abs(pos - sortedPos);
  }
  if (!max) max = fuelAmount;
  else if (fuelAmount < max) max = fuelAmount;
}

console.log(max);