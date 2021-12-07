// const data = require("./fakeData");
const data = require("./data");

const sorted = data.sort((a, b) => a - b);

let max;

for (let i = 0; i < sorted[sorted.length - 1]; i++) {
  let fuelAmount = 0;
  for (let j in sorted) {
    const posCheck = sorted[j];
    let dif = Math.abs(posCheck - i);
    for (let i = dif; i > 0; i--) {
      fuelAmount += i;
    }
  }
  if (!max) max = fuelAmount;
  else if (fuelAmount < max) max = fuelAmount;
  else break;
}

console.log(max);