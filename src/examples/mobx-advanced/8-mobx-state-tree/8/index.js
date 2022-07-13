// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { todosStore } from './storages';

const Todo = observer(() => {
    useEffect(() => {
        todosStore.fetchTodos();
    }, []);

    const todosJSX = todosStore.todos.map((item) => (
        <li
            className = { item.completed ? 'completed' : '' }
            key = { item.id }>
            { item.title }
        </li>
    ));

    return (
        <>
            <h1>MST</h1>
            <ol>
                { todosJSX }
            </ol>
        </>
    );
});

export default Todo;
