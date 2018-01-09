const greet = require("./greeting.js");

test("functionShouldReturnHelloWorld", () => {
  expect(greet.greet()).toBe("Hello WORLD!");
});

test("functionShouldReturnHelloFlo", () => {
  expect(greet.greet("Flo")).toBe("Hello FLO!");
});



//second solution
const greet = require("./greeting");

test("should return Hello Biloute", () => {
  expect(greet.greet("Biloute")).toBe("Hello BILOUTE!");
});

test("should return Hello World", () => {
  expect(greet.greet()).toBe("Hello WORLD!");
});
