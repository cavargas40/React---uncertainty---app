// function square (x) {
//   return x * x;
// };
// console.log(square(8));

// const squareArrow = (x) => x * x;
// console.log(squareArrow(8));

// challenge - use arrow functions
// const getFirstNme = (name) => {
//   return name.split(" ")[0];
// };

const getFirstName = (name) => name && name.split(" ")[0];

console.log(getFirstName("Carlos Vargas"));

