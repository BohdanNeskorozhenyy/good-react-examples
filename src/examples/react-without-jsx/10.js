// Core
import { createElement } from 'react';
import { render } from 'react-dom';

const element1 = createElement(
    'h1',
    {
        key: 0,
    },
    'Hi 🤠',
);

const element2 = createElement(
    'pre',
    {
        key: 1,
    },
    `
const add = (a, b) => {
    return a + b;
}
    `,
);

const element3 = createElement(
    'div',
    {
        style: {
            backgroundColor: 'rebeccapurple',
            marginTop:       15,
            width:           100,
            height:          100,
            borderRadius:    '50%',
            userSelect:      'none',
            cursor:          'pointer',
        },
        key: 2,
    },
    null,
);

const element4 = createElement('div', null, [element1, element2, element3]);

render(element4, document.getElementById('root'));
