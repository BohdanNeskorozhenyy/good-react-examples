// Core
import wait from 'waait';
import { autorun, trace } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

// Other
import { store } from './storages';

const Todo = observer(() => {
    useEffect(() => {
        (async () => {
            autorun(() => {
                console.log(store.ui.isLoading);
                trace(); // помогает продебажить компонент
            });

            await wait(1000);
            await store.ui.setIsLoading(true);
            await wait(1000);

            store.todo.setTitle('Изменённый текст задачи');

            await wait(1000);
            await store.ui.setIsLoading(false);
        })();
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
