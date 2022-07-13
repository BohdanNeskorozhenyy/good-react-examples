// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { store } from './storages';

const Todo = observer(() => {
    useEffect(() => {
        store.todos[ 0 ].setAssignee(store.authors[ 0 ]);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            console.log('удаление автора');
            /**
             * Попытка удалить автора задачи.
             *
             * Приведёт к ошибке так как нельзя удалить элемент на который есть ссылка.
             * */
            store.removeFirstItem();
        }, 5000);
    }, []);

    const todosJSX = store.todos.map((item, index) => {
        return (
            <li
                className = { item.completed ? 'completed' : '' }
                key = { item.id }
                onClick = { () => store.todos[ index ].complete() }>
                <p>Задача: { item.todo }</p>
                <p>Автор: { item.assignee ? item.assignee.name : null }</p>
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
