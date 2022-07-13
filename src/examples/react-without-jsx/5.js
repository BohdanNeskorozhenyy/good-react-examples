// Core
import { createElement } from 'react';
import { render } from 'react-dom';

const element = createElement('h1', null, [
    1,
    2,
    [3, 4, [5, 6, [7, 8, [9, 10]]]],
]);

render(element, document.getElementById('root'));

/// ///////////////////////////////////////////////
// V1
// [
//     <li key='A'>1</li>
//     <li key='B'>2</li>
// ]

// V2
// <Fragment>
//     <li>1</li>
//     <li>2</li>
// </Fragment>

// V3
// <>
//     <li>1</li>
//     <li>2</li>
// </>
