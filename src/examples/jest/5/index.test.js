const data = ['a'];

test('«getArray» function should return an array with valid data', () => {
    expect(['a', 'b']).toEqual(expect.arrayContaining(data));
});
