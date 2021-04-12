// arguments object - no longer bound with arrow functions
const add = (a, b) => {
  // console.log(arguments)
  return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
  name: "Andres",
  cities: ["Bogota", "Auckland"],
  printPlacesLived() {
    // const cityMessages = this.cities.map((city) => `${this.name} has lived in ${city}`);

    // console.log(this.name);
    // console.log(this.cities);
    // // const that = this;

    // this.cities.forEach((city) => {
    //   console.log(`${this.name} has lived in ${city}`);
    // });

    // return cityMessages;
    return this.cities.map((city) => `${this.name} has lived in ${city}`);
  },
};

// user.printPlacesLived();
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
