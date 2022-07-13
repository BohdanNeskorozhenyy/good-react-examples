// Core
import { createElement } from 'react';
import { render } from 'react-dom';

let temp = 0;

const element1 = createElement(
    'h1',
    {
        style: {
            color:      'wheat',
            userSelect: 'none',
            cursor:     'pointer',
            textAlign:  'center',
        },
        onClick: () => {
            temp += 1;
            console.log('Temp:', temp);
        },
    },
    'Hi, I am a React element. I was produced by «createElement» function.',
);

const element2 = createElement(
    'div',
    {
        style: {
            display:         'flex',
            justifyContent:  'center',
            alignItems:      'center',
            width:           'auto',
            height:          150,
            backgroundColor: 'black',
            borderRadius:    5,
            padding:         7,
        },
        title: 'Welcome!',
    },
    element1,
);

{ /* <element2><element1/></element2>
<div><h1></h1></div> */ }

render(element2, document.getElementById('root'));
