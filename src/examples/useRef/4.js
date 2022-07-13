/* Core */
import { useRef, useEffect } from 'react';

const Example = () => {
    const intervalRef = useRef(null);

    const start = () => {
        console.log('START');
        const id = setInterval(() => {
            console.log('Tick...');
        }, 1000);

        intervalRef.current = id;
    };

    const stop = () => {
        console.log('STOP');
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        start();

        return () => {
            clearInterval(intervalRef.current);
        };
    });

    return (
        <>
            <button onClick = { start }>Start Interval</button>
            <button onClick = { stop }>Stop Interval</button>
        </>
    );
};

export default Example;
