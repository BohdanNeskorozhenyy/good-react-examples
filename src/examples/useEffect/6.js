/* Core */
import { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    console.log(count);

    useEffect(() => {
        const timerId = setTimeout(() => {
            increment();
        }, 1000);

        return () => {
            // ? Triggers after each render
            // ? But before new useEffect
            console.log('🗑 Clean up some trash...');
            clearTimeout(timerId);
        };
    });

    return (
        <>
            <h1>{ count }</h1>
            <button onClick = { increment }>Increment +</button>
        </>
    );
};

export default Counter;
