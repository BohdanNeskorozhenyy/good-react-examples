// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

// Other
import { todoStore } from './storages';

/**
 * Фукнцию computedFn из пакета mobx-utils можно использовать в определении выбранной задачи для автоматического запоминания IsSelected.
 * computedFn создает функцию, которая запоминает выходные данные для каждой комбинации входных аргументов.
 *
 * Необходимо помнить о потребялемых функцией ресурсах.
 * Меомизированные данные автоматически очищаются, если их результаты не наблюдаются какой-либо реакцией,
 * поэтому в обычных обстоятельствах он не будет потреблять много памяти.
 *
 * НО! Нужно быть осторожным.
 * */
const Todo = observer(() => {
    useEffect(() => {
        todoStore.addTodo('Покрыть типами MobX');
    }, []);

    const todosJSX = todoStore.todos.map(
        (item) => {
            return (
                <li
                    className = { todoStore.isSelected(item.id) ? 'selected' : '' }
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
