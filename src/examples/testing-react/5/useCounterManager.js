import { useState } from 'react';

export const useCounterManager = (source) => {
    const [count, setCount] = useState(source);
    const increment = () => setCount((prevCounter) => prevCounter + 1);
    const decrement = () => setCount((prevCounter) => prevCounter - 1);

    return {
        count,
        increment,
        decrement,
    };
};
