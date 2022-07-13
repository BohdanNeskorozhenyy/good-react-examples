/* Core */
import { render } from 'react-dom';

const element = (
    <ul>
        <li>{ undefined }</li>
        <li>{ void 0 }</li>
        <li>{ null }</li>
        <li>{ true }</li>
        <li>{ false }</li>
        <li>{ NaN }</li>
        <li>0</li>
        <li>{ 1 }</li>
        <li>''</li>
        <li>' '</li>
        <li>{ '' }</li>
        <li />
        <li></li>
        <li>{ }</li>
        <li>
            { [
                'hello',
                ' ',
                '.',
                '             ',
                <span key = '0'>hello</span>,
                [0, ['even deeper', ['😱']]],
            ] }
        </li>
        <li />
        <li />
    </ul>
);

render(element, document.getElementById('root'));
