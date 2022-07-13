/* Core */
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    setTimeout(() => {
        increment();
    }, 1000);

    return (
        <>
            <h1>{ count }</h1>
            <button onClick = { increment }>Increment +</button>
        </>
    );
};

export default Counter;
