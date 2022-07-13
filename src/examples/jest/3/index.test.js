const errorMessage = 'An argument should be a number!';

const add = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error(errorMessage);
    }

    return a + b;
};

test('«add» function throws given a non-number arguments', () => {
    // expect(add('1', 2)).toThrow();
    expect(() => add('1', 2)).toThrow();
    expect(() => add(3, {})).toThrow(errorMessage);
});

// NO OP
// test('«add» function throws given a non-number arguments', () => {
//     try {
//         add('1', 2);
//     } catch ({ name }) {
//         expect(name).toBe('TypeError');
//     }
// });
