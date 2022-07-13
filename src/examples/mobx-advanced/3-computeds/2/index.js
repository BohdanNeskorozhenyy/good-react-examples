// Core
import { observer } from 'mobx-react-lite';
import { computed } from 'mobx';
import { useEffect } from 'react';

// Other
import { todoStore } from './storages';

const Todo = observer(() => {
    useEffect(() => {
        todoStore.addTodo('Покрыть типами MobX');
    }, []);

    const todosJSX = todoStore.todos.map(
        (item) => {
            /**
             * Компонент будет ререндериться только в случае изменения вычисленного значения.
             *
             * Тот факт, что мы создаем новое вычисленное значение в следующем рендере, это нормально,
             * теперь этот станет точкой кэширования,
             * а предыдущее значение будет очищено. Это отличный и продвинутый метод оптимизации.
             * */
            const isSelected = computed(() => todoStore.selectedId).get();

            return (
                <li
                    className = { isSelected === item.id ? 'selected' : '' }
                    onClick = { () => todoStore.setSelectedId(item.id) }
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
