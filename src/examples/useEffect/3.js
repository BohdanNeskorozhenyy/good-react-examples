/* Core */
import { useState, useEffect } from 'react';

const Counter = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    console.log('component render');

    useEffect(() => {
        console.log(count1, 'useEffect delayed execution');
    }, [count1]);

    return (
        <>
            <h1>Count 1: { count1 }</h1>
            <button onClick = { () => setCount1(count1 + 1) }>
                Increment Counter 1
            </button>

            <h1>Count 1: { count2 }</h1>
            <button onClick = { () => setCount2(count2 + 1) }>
                Increment Counter 2
            </button>
        </>
    );
};

export default Counter;
