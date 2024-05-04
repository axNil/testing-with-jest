const stack = require("../src/stack");

test("peek on empty stack returns undefined", () => {
  expect(stack.peek()).toBeUndefined();
});

test("peek on stack with one element returns that element", () => {
  stack.push(1);
  expect(stack.peek()).toBeDefined();
  expect(stack.peek()).toBe(1);
});

test("peek on stack with two or more elements returns the top element", () => {
  stack.push(1);
  stack.push("wow");
  stack.push(42);
  expect(stack.peek()).toBeDefined();
  expect(stack.peek()).toBe(42);
});

test("push 3 elements and check the top elements with pop", () => {
  for (let i = 0; i < 3; i++) {
    stack.push(i);
  }
  for (let i = 3; i >= 0; i--) {
    expect(stack.peek()).toBeDefined();
    expect(stack.pop()).toBe(i);
  }
});
