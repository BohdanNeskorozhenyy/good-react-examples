// Core
import { getSnapshot, onSnapshot, applySnapshot } from 'mobx-state-tree';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { store } from './storages';

/**
 * Вызывает колбек функцию после каждого изменения хранилища
 * */
onSnapshot(store, (snp) => {
    console.log('snp', snp);
});

const Todo = observer(() => {
    useEffect(() => {
        // получить снепшот хранилища в определённый текущий момент времени
        console.log('before update', getSnapshot(store));
        store.addTodo('Разобраться с подключением MST к React приложению');
        console.log('after update', getSnapshot(store));

        setTimeout(() => {
            // сбросить состояние хранилища к тому что будет передано вторым аргументом
            applySnapshot(store, {
                authors: [
                    {
                        id:     `${Date.now()}a`,
                        name:   'Чак Норрис',
                        gender: 'm',
                    },
                ],
            });
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
