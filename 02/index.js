const data = require("./data");

const map = {
    depth: 0,
    forward: 0
};

for (let dir of data) {
    switch (dir[0]) {
        case "forward":
            map.forward += +dir[1];
            break;
        case "up":
            map.depth -= +dir[1];
            break;
        case "down":
            map.depth += +dir[1];
            break;
        default: break;
    }
};
console.log(map.depth * map.forward);