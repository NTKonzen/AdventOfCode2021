const data = require("./data");

const sums = [];
for (let i in data) {
    if (i == 0 || i == 1) continue;
    sums.push(data[i] + data[i - 1] + data[i - 2]);
};

let counter = 0;
for (let i in sums) {
    if (i == 0) continue;
    if (sums[i] > sums[i - 1]) {
        counter++;
    }
}
console.log(counter);