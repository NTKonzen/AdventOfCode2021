const data = require("./data");

let counter = 0;
for (let i in data) {
    if ([0, 1, 2].includes(i)) continue;
    const secondSum = data[i] + data[i - 1] + data[i - 2];
    const firstSum = data[i - 1] + data[i - 2] + data[i - 3];
    if (secondSum > firstSum) counter++;
};
console.log(counter);