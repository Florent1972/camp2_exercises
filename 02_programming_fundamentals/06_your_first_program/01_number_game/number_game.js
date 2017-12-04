//Write a program that generates a random number between 1 and 100
function aleatoire(N) {
  return (Math.floor((N) * Math.random()+1));

}
let misteryNumber = aleatoire(1, 100);
console.log(misteryNumber);
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findNumber(input){
  if (parseInt(input, 10) === "misteryNumber") {
    console.log("Great job!");
    reader.close();
  }
  else if (parseInt(input, 10) < 1 || (parseInt(input, 10) > 100)){
    console.log("The number is between 1 and 100");
    reader.question("What is the number?", findNumber);
  }
  else if (parseInt(input, 10 < misteryNumber)) {
    console.log("Too low");
    reader.question("What is the number?", findNumber);
  }
  else if (parseInt(input, 10 > misteryNumber)) {
    console.log("Too high");
    reader.question("What is the number?", findNumber);
  }
  else if (Number.isInteger(parseInt(input, 10)) === false){
    console.log("This is not a number");
    reader.question("What is the number?", findNumber);
  }
}
reader.question("What is the number?", findNumber);
