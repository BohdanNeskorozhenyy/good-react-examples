const callFuncsExceptFirst = (...funcs) => funcs.forEach((func, index) => index !== 0 && func());

const mock1 = jest.fn();
const mock2 = jest.fn();

describe('«callFuncsExceptFirst» function:', () => {
    beforeEach(() => {
        callFuncsExceptFirst(mock1, mock2);
    });

    test('should not call first-argument function', () => {
        expect(mock1).not.toHaveBeenCalled();
    });

    test('should call every function passed as argument one time', () => {
        expect(mock2).toHaveBeenCalledTimes(1);
    });
});
