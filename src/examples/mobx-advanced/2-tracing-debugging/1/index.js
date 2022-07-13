// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { trace } from 'mobx';

// Other
import { todoStore } from './storages';

const Todo = observer(() => {
    /**
     * Переходит в debug mode всякий раз, когда наблюдаемое значение вызывает ререндер компонента.
     * Далее в разделе Call stack можно найти функцию изменяющую значение хранилища.
     * */
    trace(true);
    useEffect(() => {
        todoStore.setTitle('Изменённый заголовок задачи');
    }, []);

    return (
        <>
            <h1>Автор</h1>
            <p>{ todoStore.title }</p>
        </>
    );
});

export default Todo;
