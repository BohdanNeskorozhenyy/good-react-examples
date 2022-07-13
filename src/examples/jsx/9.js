/* Core */
import { render } from 'react-dom';

const items = [
    { id: '123', text: 'a ball' },
    { id: '456', text: 'a sword' },
    { id: '789', text: 'a brush' },
    { id: '987', text: 'a stick' },
];

const list1 = items.map((item) => <li key = { item.id }>{ item.text }</li>);
const list2 = items.map((item) => <li key = { item.id }>{ item.text }</li>);

render(
    [<ul key = { 0 }>{ list1 }</ul>, <ul key = { 1 }>{ list2 }</ul>],
    document.getElementById('root'),
);
