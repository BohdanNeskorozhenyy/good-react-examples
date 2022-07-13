import { getUid } from './helpers';

jest.mock('./helpers.js');

test('«getUid» function should return a number', () => {
    expect(getUid()).toBe(1);
});
