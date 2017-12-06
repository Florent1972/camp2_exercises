const greet = require("./greeting.js");

test("functionShouldReturnHelloWorld", () => {
  expect(greet.greet()).toBe("Hello WORLD!");
});

test("functionShouldReturnHelloFlo", () => {
  expect(greet.greet("Flo")).toBe("Hello FLO!");
});
