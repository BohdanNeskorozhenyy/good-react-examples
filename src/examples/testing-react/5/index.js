import { useCounterManager } from './useCounterManager';

export const Counter = ({ source }) => {
    const { count, increment, decrement } = useCounterManager(source);

    return (
        <>
            <button onClick = { increment } id = 'increment'>Increment</button>
            <p data-testid = 'counterValue'>{ count }</p>
            <button onClick = { decrement } id = 'decrement'>Decrement</button>
        </>
    );
};
