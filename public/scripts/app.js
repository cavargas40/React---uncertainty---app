"use strict";

// arguments object - no longer bound with arrow functions
var add = function add(a, b) {
  // console.log(arguments)
  return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

var user = {
  name: "Andres",
  cities: ["Bogota", "Auckland"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    // const cityMessages = this.cities.map((city) => `${this.name} has lived in ${city}`);

    // console.log(this.name);
    // console.log(this.cities);
    // // const that = this;

    // this.cities.forEach((city) => {
    //   console.log(`${this.name} has lived in ${city}`);
    // });

    // return cityMessages;
    return this.cities.map(function (city) {
      return _this.name + " has lived in " + city;
    });
  }
};

// user.printPlacesLived();
console.log(user.printPlacesLived());

// Challenge area

var multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
