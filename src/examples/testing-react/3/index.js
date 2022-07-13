import { useState } from 'react';

export const Counter = ({ source }) => {
    const [count, setCount] = useState(source);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <>
            <button onClick = { increment } data-testid = 'increment'>Increment</button>
            <p data-testid = 'counterValue'>{ count }</p>
            <button onClick = { decrement } data-testid = 'decrement'>Decrement</button>
        </>
    );
};
