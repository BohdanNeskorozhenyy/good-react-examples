// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { TodoItem } from './components/TodoItem';

import { store } from './store';

const Todo = observer(() => {
    // Симуляция изменения заголовка задачи
    useEffect(() => {
        setTimeout(() => {
            console.log('Изменение заголовка задачи');
            store.title = 'Новая задача';
        }, 3000);
    }, []);

    /*
    * Будьте осторожны. Ивлекайте наблюдаемые свойства только в компоненте
    * обёрнутом в observer в противном случае компоненты могут не следить за изменениями
    * */
    return (
        <>
            <section>
                <h1>Задачи:</h1>
                <TodoItem store = { store } />
                { /* <TodoItem store={{ title: store.title }} /> */ }
            </section>
        </>
    );
});

export default Todo;
