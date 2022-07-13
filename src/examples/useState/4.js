/* Core */
import { useState } from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);

    setValue(2); // ! Error

    return <h1>{ value }</h1>;
};

export default Counter;
