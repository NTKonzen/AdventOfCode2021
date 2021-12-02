const data = require("./data");

const map = {
    depth: 0,
    forward: 0,
    aim: 0
};

for (let dir of data) {
    switch (dir[0]) {
        case "forward":
            map.forward += +dir[1];
            map.depth += map.aim * +dir[1]
            break;
        case "up":
            map.aim -= +dir[1];
            break;
        case "down":
            map.aim += +dir[1];
            break;
        default: break;
    }
};

console.log(map.depth * map.forward);