/* Core */
import { useRef } from 'react';

const Example = () => {
    const inputRef = useRef();

    const focusOnClick = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <input ref = { inputRef } type = 'text' />
            <button onClick = { focusOnClick }>Input focus</button>
        </>
    );
};

export default Example;
