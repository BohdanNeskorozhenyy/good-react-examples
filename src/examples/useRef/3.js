/* Core */
import { useRef } from 'react';

const Example = () => {
    const stringRef = useRef('hello');

    console.log(stringRef.current);
    stringRef.current += ' world';
    console.log(stringRef.current);

    return <h1>{ stringRef.current }</h1>;
};

export default Example;
