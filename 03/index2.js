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
// const arrs = {};
let oxygen = data;
let c02 = data;

const getArrs = (data, index) => {
    const arrs = {};
    for (let bin of data) {
        for (let i in bin) {
            const bit = +bin[i];
            arrs[i] ? arrs[i].push(bit) : arrs[i] = [bit];
        }
    }
    for (let i in arrs) {
        let firstIndex = arrs[i].sort().findIndex(v => v);
        arrs[i] = (firstIndex > arrs[i].length / 2) ? 0 : 1;
    }
    return arrs;
}

const getArrs2 = (data, index) => {
    const arrs = {};
    for (let bin of data) {
        for (let i in bin) {
            const bit = +bin[i];
            arrs[i] ? arrs[i].push(bit) : arrs[i] = [bit];
        }
    }
    for (let i in arrs) {
        let firstIndex = arrs[i].sort().findIndex(v => v);
        arrs[i] = (firstIndex > arrs[i].length / 2) ? 1 : 0;
    }
    return arrs;
}

let common = [];
let uncommon = [];
let arrs = getArrs(data);

for (let i = 0; i < data[0].length; i++) {
    common.push(arrs[i]);
    oxygen = oxygen.filter(v => v[i] == arrs[i]);
    arrs = getArrs(oxygen);
    if (oxygen.length == 1) {
        common = oxygen[0].split("");
        break;
    };
}

arrs = getArrs2(data);
for (let i = 0; i < data[0].length; i++) {
    uncommon.push(arrs[i]);
    c02 = c02.filter(v => v[i] == arrs[i]);
    console.log("c02", c02)
    console.log(`arrs[${i}]`, arrs[i]);
    arrs = getArrs2(c02);
    if (c02.length == 1) {
        uncommon = c02[0].split("");
        break;
    };
    console.log("========")
}
common = parseInt(common.join(''), 2);
uncommon = parseInt(uncommon.join(''), 2);
console.log(common);
console.log(uncommon);

console.log(common * uncommon);