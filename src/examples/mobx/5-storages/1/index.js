// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

// Other
import { todoStore, uiStore } from './storages';

const Todo = observer(() => {
    useEffect(() => {
        setTimeout(() => {
            uiStore.setStatus(true);
        }, 2000);

        setTimeout(() => {
            todoStore.setTitle('Изменённый текст задачи');
        }, 3000);

        setTimeout(() => {
            uiStore.setStatus(false);
        }, 4000);
    }, []);

    return (
        <>
            <h1>У MobX есть свои аля ESLint правила проверки</h1>
            { uiStore.isLoading && <p>Загружаю список задач...</p> }
            { !uiStore.isLoading && <p>{ todoStore.title }</p> }
        </>
    );
});

export default Todo;
