/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:
   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.

   YOU MUST USE array.map
*/

function fizzBuzz(list){
  return list.map(getWord);
}
function getWord(numbers){
  if (numbers % 3 === 0 && numbers % 5 === 0) {
    return ("FizzBuzz");
  } else if (numbers % 3 === 0) {
    return ("Fizz");
  } else if (numbers % 5 === 0) {
    return ("Buzz");
  } else {
    return (numbers);
  }
}

module.exports = fizzBuzz;
