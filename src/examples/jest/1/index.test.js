// yarn test src/examples/jest/1/
// ...test.js
// ...spec.js
// __tests__/index.js

const add = (a, b) => a + b;

describe('«add» function:', () => {
    test('should add two numbers', () => {
        expect(add(1, 3)).toBe(4);
    });

    test('should add 2 and 3 and return 5', () => {
        expect(add(2, 3)).toBe(5);
    });
});
