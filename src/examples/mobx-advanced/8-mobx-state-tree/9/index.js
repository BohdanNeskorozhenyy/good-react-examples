// Core
import { onAction, onPatch } from 'mobx-state-tree';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

// Instruments
import { todosStore } from './storages';

/**
 * Реагирует на каждое изменение модели (без траназкционности)
 * */
onPatch(todosStore, (data) => {
    console.log('onPatch', data);
});

onAction(todosStore, (data) => {
    console.log('onAction', data);
});

// Примняет патч к модели.
// interface IJsonPatch {
//     op: "replace" | "add" | "remove"
//     path: string
//     value?: any
// }
// applyPatch(model, patch)

const Todo = observer(() => {
    useEffect(() => {
        todosStore.addTodo('Разобраться с подключением MST к React приложению');
    }, []);

    const todosJSX = todosStore.todos.map((item) => <li key = { item.id }>{ item.todo }</li>);

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
