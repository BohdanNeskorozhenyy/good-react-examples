/* Core */
import { render } from 'react-dom';

const message = () => 'Hi, I am a React element.';

const element = <h1>{ message() }</h1>;

render(element, document.getElementById('root'));
