var nameVar = "Carlos";
var nameVar = "Andres";
console.log("nameVar", nameVar);

let nameLet = "Azusa";
nameLet = "Azusita";
// let nameLet = 'azusiiita'; // error
console.log("nameLet", nameLet);

const nameConst = "Ricardo";
// const nameConst = "Ricardo"; // error
// nameConst = "Don Ricardo"; // error
console.log("nameConst", nameConst);


function getPetName() {
    const petName = 'Yudi';
    return petName;
}

const petName = getPetName();
console.log(petName);


// block scoping
var fullName = "Carlos Vargas";
let firstName;
if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}
console.log(firstName);
