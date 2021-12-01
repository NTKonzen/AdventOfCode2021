const data = require("./data");

let counter = 0;
const sums = [];
for (let i in data) {
    if (i == 0 || i == 1) continue;
    sums.push(data[i] + data[i - 1] + data[i - 2]);
    if (sums.length > 1 && sums[i - 2] > sums[i - 3]) counter++;
};
console.log(counter);