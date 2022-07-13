// Core
import { createElement, cloneElement } from 'react';
import { render } from 'react-dom';

const element1 = createElement(
    'h1',
    {
        style: {
            color:      'wheat',
            userSelect: 'none',
            cursor:     'pointer',
            textAlign:  'center',
        },
    },
    'Hi, I am a React element. I was produced by «createElement» function.',
);

const element2 = createElement(
    'div',
    {
        title: 'A title!',
        style: {
            display:        'flex',
            justifyContent: 'center',
            alignItems:     'center',
        },
    },
    element1,
);

const element3 = cloneElement(element2, {
    style: {
        backgroundColor: 'black',
        borderRadius:    5,
        padding:         7,
    },
});

render(element3, document.getElementById('root'));
