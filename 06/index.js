const data = require("./fakeData");
// const data = require("./data");
// const data = ["0"];

class Fish {
  constructor(days) {
    this.days = days || 8;
  }

  passDay() {
    this.days--;
    if (this.days < 0) this.days = 6;
  }
}

class School {
  constructor(initial) {
    this.fish = initial.map(v => new Fish(v));
  }

  passDay() {
    const manyNewFish = this.fish.filter(f => f.days === 0).length;
    const newFish = manyNewFish
      ? Array.from({ length: manyNewFish }).map(v => new Fish())
      : [];
    this.fish.forEach(f => f.passDay());
    this.fish = this.fish.concat(newFish);
  }

  logSchool() {
    const formatted = this.fish.map(f => f.days).join(", ")
    console.log(formatted);
  }

  logLength() {
    console.log(this.fish.length);
  }

  passDays(days) {
    for (let i = 0; i < days; i++) {
      this.passDay();
    }
  }
}

const school = new School(data);

school.passDays(256);

// school.logSchool();
school.logLength();