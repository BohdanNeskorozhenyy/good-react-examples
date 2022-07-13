/* Core */
import { useRef, useEffect } from 'react';

const Example = () => {
    const inputRef = useRef();

    console.log(1, inputRef);

    const focusOnClick = () => {
        inputRef.current.focus();
        console.log(inputRef.current.value);
    };

    useEffect(() => {
        console.log(2, inputRef);
    }, []);

    return (
        <>
            <input ref = { inputRef } type = 'text' />
            <button onClick = { focusOnClick }>Input focus</button>
        </>
    );
};

export default Example;
