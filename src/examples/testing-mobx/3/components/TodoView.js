// Core
import { observer } from 'mobx-react-lite';

export const TodoView = observer(({ todo }) => {
    return (
        <li>
            <input
                type = 'checkbox'
                checked = { todo.completed }
                onChange = { () => console.log('click') } />
            { todo.task }
        </li>
    );
});
