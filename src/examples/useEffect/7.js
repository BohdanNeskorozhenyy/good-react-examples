/* Core */
import { useState, useEffect } from 'react';

const Clock = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log('useEffect execution');

        const timerId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
            console.log(timerId, 'setInterval execution');
        }, 1000);

        return () => {
            console.log('useEffect cleanup function');
            clearInterval(timerId);
        };
    }, []);

    return <h1>Seconds passed: { seconds }</h1>;
};

const Controller = () => {
    const [clockVisible, setClockVisible] = useState(false);

    return (
        <>
            <button onClick = { () => setClockVisible(!clockVisible) }>
                { clockVisible ? 'Hide' : 'Show' } clock
            </button>

            { clockVisible && <Clock /> }
        </>
    );
};

export default Controller;
