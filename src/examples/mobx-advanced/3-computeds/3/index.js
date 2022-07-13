// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

// Other
import { todoStore } from './storages';

/**
 * Ещё одним из возможных вариантов решения данной задачи можно считать
 * добавления свойства isSelected как часть объекта задачи
 * */
const Todo = observer(() => {
    useEffect(() => {
        todoStore.addTodo('Покрыть типами MobX');
    }, []);

    const todosJSX = todoStore.todos.map(
        (item) => {
            return (
                <li
                    className = { item.isSelected ? 'selected' : '' }
                    onClick = { () => todoStore.setSelected(item.id) }
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
