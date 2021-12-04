const data = require("./data");

// const data = `00100
// 11110
// 10110
// 10111
// 10101
// 01111
// 00111
// 11100
// 10000
// 11001
// 00010
// 01010`.split("\n");

const map = {};

for (let bin of data) {
    for (let i in bin) {
        const bit = +bin[i];
        if (bit) map[i] ? map[i]++ : map[i] = 1;
    }
    // console.log("bin", bin);
    // console.log("map", map);
    // console.log("=============")
}

let gamma = [];
let epsilon = [];

for (let i in map) {
    console.log("i", i)
    const amount = map[i]
    console.log(amount)
    if (amount > data.length / 2) {
        gamma.push("1");
        epsilon.push("0")
    } else {
        epsilon.push("1");
        gamma.push("0")
    }
}

console.log("gamma", gamma)
console.log("epsilon", epsilon)
gamma = parseInt(gamma.join(''), 2);
epsilon = parseInt(epsilon.join(''), 2);
console.log(gamma * epsilon);
// console.log(parseInt("00011", 2));