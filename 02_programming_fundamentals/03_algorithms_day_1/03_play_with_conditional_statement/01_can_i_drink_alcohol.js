// > Frieda and Francis walk on the street. Frieda is 22 and Francis is 17.
//
// Create two objects, `francis`, `frieda` with the fields :
//   `age` (an integer) and `name`, (obviously a string)
const francis = {
  age : 17,
  name : "Francis"
};
const frieda = {
  age : 22,
  name : "Frieda"
};
// Create two variables `canFriedaDrinkAlcohol` and `canFrancisDrinkAlcohol` to answer,
// respectively, to the question "Can he / she drink alcohol?".
// Think about the Primitive Data Type that is best suited for the answer.
// Hint: Think about the number of options
const canFriedaDrinkAlcohol = frieda.age >=18;
const canFrancisDrinkAlcohol = francis.age >=18;

// These variables should stay correct if we modify the ages of the objects
// `francis` and `frieda` in the declaration.
// Warning: If you run `npm test` again after changing the age values,
// it is expected to see failures for these tests:
// "Frieda|Francis should be inside an object frieda|francis".
// All the other tests should work.
