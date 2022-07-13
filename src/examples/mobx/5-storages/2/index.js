// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

// Other
import { store } from './storages';

const Todo = observer(() => {
    useEffect(() => {
        setTimeout(() => {
            store.ui.setStatus(true);
        }, 2000);

        setTimeout(() => {
            store.todo.setTitle('Изменённый текст задачи');
        }, 3000);

        setTimeout(() => {
            store.ui.setStatus(false);
        }, 4000);
    }, []);

    return (
        <>
            <h1>У MobX есть свои аля ESLint правила проверки</h1>
            { store.ui.isLoading && <p>Загружаю список задач...</p> }
            { !store.ui.isLoading && <p>{ store.todo.title }</p> }
        </>
    );
});

export default Todo;
