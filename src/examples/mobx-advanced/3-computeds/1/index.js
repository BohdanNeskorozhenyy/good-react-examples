// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

// Other
import { todoStore } from './storages';

/**
 * Данный пример будет работать и без вычисляемых полей.
 * Важно понимать, что вычисленные значения являются ТОЛЬКО точками кэширования.
 *
 * Если производные являются чистыми,
 * наличие геттера или функции без вычислений не изменяет поведение,
 * оно просто немного менее эффективно.
 * */
const Todo = observer(() => {
    useEffect(() => {
        todoStore.addTodo('Покрыть типами MobX');
    }, []);

    /**
     * Рассмотрим из чего состоит хранилище
     * Proxy + observable
     * */
    console.log(todoStore);

    const todosJSX = todoStore.todos.map(
        (item) => {
            return (
                <li
                    className = { todoStore.selectedId === item.id ? 'selected' : '' }
                    onClick = { () => { todoStore.setSelectedId(item.id); } }
                    key = { item.id }>
                    { item.todo }
                </li>
            );
        },
    );

    return (
        <>
            <h1>Автор</h1>
            <ul>
                { todosJSX }
            </ul>
        </>
    );
});

export default Todo;
