/* Core */
import { render } from 'react-dom';

const getMessage = (year = new Date().getUTCFullYear()) => `Welcome in ${year}!`;

const element = <h1>{ getMessage() }</h1>;

render(element, document.getElementById('root'));
