const add = (a, b) => a + b;
const generateGreeting = (name = 'anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3,4);
  expect(result).toBe(7);
});

test('should generate greeting from name', () => {
  let greeting = generateGreeting('Mike');
  expect(greeting).toBe('Hello Mike!');
  greeting = generateGreeting();
  expect(greeting).toBe('Hello anonymous!')
});