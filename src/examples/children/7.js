/* Core */
import { Children } from 'react';

const Child = (props) => {
    console.log(props);

    const childrenJSX = Children.map(props.children, (child) => {
        return <li>{ child }</li>;
    });

    return <ul>{ childrenJSX }</ul>;
};

const Parent = () => {
    return (
        <Child>
            <span>First child</span>
            <span>Second child</span>
            <span>Third child</span>
        </Child>
    );
};

export default Parent;
