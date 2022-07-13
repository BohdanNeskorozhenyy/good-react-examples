/* Core */
import { render } from 'react-dom';

/* Instruments */
import { useCounter } from './hooks/useCounter';

export const Counter = () => {
    const { count, decrement, increment } = useCounter();

    return (
        <>
            <h1>{ count }</h1>
            <button onClick = { decrement }>Decrement -</button>
            <button onClick = { increment }>Increment +</button>
        </>
    );
};

export default Counter;
