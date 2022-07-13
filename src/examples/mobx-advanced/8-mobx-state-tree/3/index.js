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

    const todosJSX = store.todos.map((item) => <li key = { item.id }>{ item.todo }</li>);
    const authorsJSX = store.authors.map((item) => <li key = { item.id }>{ item.name }</li>);

    return (
        <>
            <h1>MST</h1>
            <ol>
                { todosJSX }
            </ol>
            <hr />
            <h2>Авторы</h2>
            <ol>
                { authorsJSX }
            </ol>
        </>
    );
});

export default Todo;
