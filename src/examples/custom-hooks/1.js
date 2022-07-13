/* Core */
import { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <>
            <h1>{ count }</h1>
            <button onClick = { decrement }>Decrement -</button>
            <button onClick = { increment }>Increment +</button>
        </>
    );
};

export default Counter;
