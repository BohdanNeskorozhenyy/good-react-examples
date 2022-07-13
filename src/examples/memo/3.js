// Core
import React, { useState, memo } from 'react';

const Child = memo(({ count }) => {
    console.log('Child Render');

    return (
        <>
            <h2>{ count }</h2>
        </>
    );
});

const Parent = () => {
    console.log('Parent Render');

    const [title, setTitle] = useState('Count');
    const [val, setVal] = useState(0);

    const updateTitle = () => {
        setTitle((prevTitle) => prevTitle.toUpperCase());
    };

    const updateVal = () => {
        setVal((prevVal) => prevVal + 1);
    };

    return (
        <>
            <h1>{ title }</h1>
            <button onClick = { updateTitle }>Update title</button>
            <Child count = { val } />
            <button onClick = { updateVal }>Update Count</button>
        </>
    );
};

export default Parent;
