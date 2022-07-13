// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { store } from './storages';

const Todo = observer(() => {
    useEffect(() => {
        setTimeout(() => {
            store.addTodo('Разобраться с подключением MST к React приложению');
        }, 2000);
    }, []);

    const todosJSX = store.todos.map((item, index) => {
        return (
            <li
                className = { item.completed ? 'completed' : '' }
                key = { item.id }
                onClick = { () => store.todos[ index ].complete() }>
                { item.todo }
            </li>
        );
    });

    return (
        <>
            <h1>MST</h1>
            <p>Завершенных/в работе: { store.uncompletedTodos }</p>
            <ol>
                { todosJSX }
            </ol>
        </>
    );
});

export default Todo;
