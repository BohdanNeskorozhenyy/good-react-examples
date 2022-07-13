// Core
import React, { useCallback, useState } from 'react';

const CalculateComponent = ({ a, b, text }) => {
    console.log('Render');

    const [title, setTitle] = useState(text);

    const updateTitle = () => {
        setTitle((prevTitle) => prevTitle.toUpperCase());
    };

    const sum = (first, second) => {
        console.log('Sum');

        return first + second;
    };

    const memoizedSum = useCallback(() => {
        return sum(a, b);
    }, [a, b]);

    return (
        <>
            <h1>{ title }</h1>
            <h2>{ memoizedSum() }</h2>
            <button onClick = { updateTitle }>Update Title</button>
        </>
    );
};

const Example = () => {
    return (
        <>
            <CalculateComponent
                a = { 1 } b = { 2 }
                text = 'Sum' />
        </>
    );
};

export default Example;
