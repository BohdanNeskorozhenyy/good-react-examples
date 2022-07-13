// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

// Other
import { todoStore } from './storages';

const Todo = observer(() => {
    useEffect(() => {
        todoStore.getTodos();
    }, []);

    const todosJSX = todoStore.todos.map(
        (item) => {
            return (
                <li
                    key = { item.id }>
                    { item.title }
                </li>
            );
        },
    );

    return (
        <>
            <h1>Задачи</h1>
            <ol>
                { todosJSX }
            </ol>
        </>
    );
});

export default Todo;
