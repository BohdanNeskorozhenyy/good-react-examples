import { timerStore } from './store';


describe('Increments store', () => {
    test('Initial value of secondsPassed should be equal to 0', () => {
        expect(timerStore.secondsPassed).toBe(0);
    });

    test('Increment method should add +1 to secondsPassed', () => {
        timerStore.increment();

        expect(timerStore.secondsPassed).toBe(1);
    });
});
