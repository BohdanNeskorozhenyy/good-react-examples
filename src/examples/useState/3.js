/* Core */
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    console.log(count);

    const increment = () => {
        setCount((prevValue) => prevValue + 1);
    };

    const decrement = () => {
        setCount((prevValue) => prevValue - 1);
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
