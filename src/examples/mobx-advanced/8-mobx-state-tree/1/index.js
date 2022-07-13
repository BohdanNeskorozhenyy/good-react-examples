// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { todosStore } from './storages';

const Todo = observer(() => {
    useEffect(() => {
        /**
         * Ошибка! MST жестко проверяем что бы данные изменялись при помощи actions
         * */
        // todosStore.todos.push({ todo: '1' });

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
