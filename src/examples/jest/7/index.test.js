const add = (a, b) => a + b;

test('«add» function should match its snapshot', () => {
    expect(add(3, 3)).toMatchSnapshot();
});
