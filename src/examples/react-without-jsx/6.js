// Core
import { createElement } from 'react';
import { render } from 'react-dom';

const element = createElement('h1', null, 'Hi, I am a React element.');

const callback = () => {
    console.log('→ app rendered!');
};

render(
    element,
    document.getElementById('root'),
    callback,
);
