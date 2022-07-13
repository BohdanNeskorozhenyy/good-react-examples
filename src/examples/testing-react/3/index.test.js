// Core
import { render, fireEvent, getByTestId } from '@testing-library/react';

// Components
import { Counter } from './index';

const init = (source) => {
    const { container } = render(<Counter source = { source } />);
    const counter = getByTestId(container, 'counterValue');
    const increment = getByTestId(container, 'increment');
    const decrement = getByTestId(container, 'decrement');

    return {
        counter,
        increment,
        decrement,
    };
};

describe('Counter component', () => {
    test('Initial value should be received from property source', () => {
        const source = 0;
        const { counter } = init(source);
        const initialValue = Number(counter.textContent);
        expect(initialValue).toBe(source);
    });

    test('Increment function should increase value by 1', () => {
        const { counter, increment } = init(0);
        const prevCounter = Number(counter.textContent); // до клика
        fireEvent.click(increment); // клик
        const currentCounter = Number(counter.textContent); // после клика
        const incrementedValue = Number(prevCounter + 1); // что мы ожидаем
        expect(currentCounter).toBe(incrementedValue);
    });
    test('Decrement function should decrease value by 1', () => {
        const { counter, decrement } = init(0);
        const prevCounter = Number(counter.textContent);
        fireEvent.click(decrement);
        const currentCounter = Number(counter.textContent);
        const decrementedValue = Number(prevCounter - 1);
        expect(currentCounter).toBe(decrementedValue);
    });
});
