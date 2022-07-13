/* Core */
import { Children } from 'react';

const Child = (props) => {
    const childrenCount = Children.count(props.children);

    return (
        <>
            <h1>Component have { childrenCount } children:</h1>
            { props.children }
        </>
    );
};

const Parent = () => {
    return (
        <Child>
            <p>Lorem</p>
            <p>ipsum</p>
            <p>dolor</p>
            <p>sit amet!</p>
        </Child>
    );
};

export default Parent;
