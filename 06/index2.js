const data = require("./data");

let school = Array.from({ length: 9 }).fill(0);

const runDays = (initialSchool, days) => {
  for (let fish of initialSchool) school[fish]++;

  for (let i = 0; i < days; i++) {
    const newSchool = Array.from({ length: 9 }).fill(0);
    for (let onDay in school) {
      const numFish = school[onDay];
      if (onDay === "0") {
        newSchool[8] += numFish;
        newSchool[6] += numFish;
      } else {
        newSchool[onDay - 1] += numFish;
      }
    }
    school = newSchool;
  }

  let total = 0;
  for (let i in school) total += school[i];
  console.log(total);
};

runDays(data, 256);