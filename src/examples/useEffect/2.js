/* Core */
import { useState, useEffect } from 'react';
import wait from 'waait';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [userName, setUserName] = useState(null);

    console.log('component render');

    const fetchUserName = async () => {
        await wait(2000);
        setUserName('Jack');
    };

    useEffect(() => {
        console.log('useEffect execution');
        fetchUserName();
    }, []);

    return (
        <>
            <h1>{ count }</h1>
            <button onClick = { () => setCount(count + 1) }>Increment</button>

            <h2>{ !userName ? 'Loading...' : userName }</h2>
        </>
    );
};

export default Counter;
