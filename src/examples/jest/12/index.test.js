const callFuncs = (...funcs) => funcs.forEach((func) => func());

test('«callFuncs» function should call every function passed as argument one time', () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();

    callFuncs(mock1, mock2);

    expect(mock1).toHaveBeenCalledTimes(1);
    expect(mock2).toHaveBeenCalledTimes(1);
});
