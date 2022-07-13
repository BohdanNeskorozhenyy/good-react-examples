/* Core */
import { render } from 'react-dom';

const element = <h1>Welcome in { new Date().getFullYear() }!</h1>;
// const element = <h1>{ `Welcome in ${new Date().getFullYear()}!` }</h1>;

render(element, document.getElementById('root'));
