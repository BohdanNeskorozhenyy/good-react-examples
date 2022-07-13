/* Core */
import { createElement } from 'react';
import { render } from 'react-dom';

const element = createElement(
    'a',
    {
        href:   'https://www.google.com',
        title:  'Google!',
        rel:    'noopener noreferrer',
        target: '_blank',
    },
    'Google it!',
);

console.log('→ element', element);

// element.data = 'mutation!';

render(element, document.getElementById('root'));
