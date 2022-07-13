import { render } from 'react-dom';
import { jsx as _jsx } from 'react/jsx-runtime';

const App = () => {
    return _jsx('h1', { children: 'Hello world' });
};

render(<App />, document.getElementById('root'));
