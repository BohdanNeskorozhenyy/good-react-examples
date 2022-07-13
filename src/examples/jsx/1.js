/* Core */
import { createElement } from 'react';
import { render } from 'react-dom';

const element1 = <h1 key = { 0 }>Hi, I am a React element.</h1>;

/**
 * Эти элементы эквивалентны. Разница только в синтаксисе.
 */

const element2 = createElement('h1', { key: 1 }, 'Hi, I am a React element.');

render([element1, element2], document.getElementById('root'));
