/* Core */
import { Fragment } from 'react';
import { render } from 'react-dom';

// Prior Fragment release
const element1 = [
    <h1 key = '0'>Welcome!</h1>,
    <p key = '1'>Lorem ipsum dolor sit amet!</p>,
];

const element2 = (
    <Fragment>
        <h1>Welcome!</h1>
        <p>Lorem ipsum dolor sit amet!</p>
    </Fragment>
);

const element3 = (
    <>
        <h1>Welcome!</h1>
        <p>Lorem ipsum dolor sit amet!</p>
    </>
);

render(
    <>
        { element1 } { element2 } { element3 }
    </>,
    document.getElementById('root'),
);
