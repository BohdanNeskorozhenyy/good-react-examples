const expectedReturn = 1622482333483;
const implementation = () => expectedReturn;

describe('«getDate» function:', () => {
    beforeEach(() => {
        Date.now = jest.fn().mockImplementation(implementation);
    });

    test('should return deterministic value', () => {
        const value = Date.now();

        expect(value).toBe(expectedReturn);
    });

    test('«Date.now» should have been called once', () => {
        Date.now();

        expect(Date.now).toHaveBeenCalledTimes(1);
    });

    test('«Date.now» should return deterministic value', () => {
        Date.now();

        expect(Date.now).toHaveBeenCalledTimes(1);
        expect(Date.now).toHaveReturnedWith(expectedReturn);
    });
});
