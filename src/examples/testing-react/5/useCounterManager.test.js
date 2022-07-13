import { renderHook, act } from '@testing-library/react-hooks';
import { useCounterManager } from './useCounterManager';

describe('CounterManager custom hook', () => {
    let source = null;
    let result = null;

    beforeEach(() => {
        source = 0;
        result = renderHook(() => useCounterManager(source)).result;
    });

    test('Initial value should be received from property source', () => {
        expect(result.current.count).toBe(source);
    });

    test('Increment function should increase value by 1', () => {
        const prevCount = result.current.count;
        act(() => result.current.increment());
        const incrementedValue = prevCount + 1;
        expect(result.current.count).toBe(incrementedValue);
    });

    test('Decrement function should increase value by 1', () => {
        const prevCount = result.current.count;
        act(() => result.current.decrement());
        const decrementedValue = prevCount - 1;
        expect(result.current.count).toBe(decrementedValue);
    });
});
