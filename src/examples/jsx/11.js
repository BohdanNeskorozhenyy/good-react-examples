/* Core */
import { render } from 'react-dom';

const isPizzaOpen = false;
const welcome = <h1>Welcome to Super Pizza!</h1>;
const goodbye = <h1>See you tomorrow!</h1>;

const element1 = isPizzaOpen ? welcome : goodbye;
const element2 = isPizzaOpen && welcome;

render(
    <>
        { element1 } { element2 }
    </>,
    document.getElementById('root'),
);
