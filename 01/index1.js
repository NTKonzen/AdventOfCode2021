const data = require("./data");

let counter = 0;
for (let i in data) {
    if (i == 0) continue;
    if (data[i] > data[i - 1]) {
        counter++;
    }
}
console.log(counter);