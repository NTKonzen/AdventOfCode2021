// const data = require("./fakeData");
const data = require("./data");

let minX = 0;
let minY = 0;

const formatRow = row => row.map(v => v || "-").join(" ");

const formatMap = map => {
    return `\n` + map.map(row => formatRow(row)).join(`\n`) + `\n`
};

for (let set of data) {
    for (let coordinates of set) {
        if (coordinates[0] > minX) minX = coordinates[0];
        if (coordinates[1] > minY) minY = coordinates[1];
    }
}

const map = [];
for (let i = 0; i <= minY; i++) {
    map.push(Array.from( { length: minX + 1 }).map(() => ""))
}

const horizontal = [];
const vertical = [];
let diagonal = [];

data.forEach(set => {
    if (set[0][0] === set[1][0]) vertical.push(set);
    else if (set[0][1] === set[1][1]) horizontal.push(set);
    else diagonal.push(set);
});

horizontal.forEach(set => {
    let row = set[0][1];
    let start;
    let end;
    if (set[0][0] < set[1][0]) {
        start = set[0][0];
        end = set[1][0];
    } else {
        start = set[1][0];
        end = set[0][0];
    }
    map[row] = map[row].map((v,i) => {
        if (i < start || i > end) return v;
        if (v) return v + 1;
        else return 1;
    })
});

vertical.forEach(set => {
    const col = set[0][0];
    let start;
    let end;
    if (set[0][1] < set[1][1]) {
        start = set[0][1];
        end = set[1][1];
    } else {
        start = set[1][1];
        end = set[0][1];
    }
    for (const i in map) {
        if (i < start || i > end) continue;
        map[i][col] ? map[i][col]++ : map[i][col] = 1;
    }
});

diagonal = diagonal.filter(set => {
    const startX = set[0][0] < set[1][0] ? set[0][0] : set[1][0];
    const startY = set[0][1] < set[1][1] ? set[0][1] : set[1][1];
    const endX = set[0][0] < set[1][0] ? set[1][0] : set[0][0];
    const endY = set[0][1] < set[1][1] ? set[1][1] : set[0][1];
    const xDiff = Math.abs(endX - startX);
    const yDiff = Math.abs(endY - startY);
    return xDiff === yDiff;
});

diagonal.forEach(set => {
    set = set.sort((a,b) => a[1] - b[1]);
    const startX = set[0][0];
    const startY = set[0][1] < set[1][1] ? set[0][1] : set[1][1];
    const endX = set[1][0];
    const endY = set[0][1] < set[1][1] ? set[1][1] : set[0][1];

    const adding = endX > startX;
    let onX = startX;
    for (const i in map) {
        if (i < startY || i > endY) continue;
        map[i][onX] ? map[i][onX]++ : map[i][onX] = 1;
        adding ? onX++ : onX--;
    }
})

// console.log(formatMap(map));

let count = 0;
for (let row of map) {
    for (let point of row) {
        if (point && point > 1) count++;
    }
}

console.log(count);