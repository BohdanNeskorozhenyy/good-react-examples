// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { trace } from 'mobx';

// Other
import { todoStore } from './storages';

trace(todoStore, 'upperCasedTitle', true);

const Todo = observer(() => {
    useEffect(() => {
        todoStore.setTitle('Изменённый заголовок задачи');
    }, []);

    return (
        <>
            <h1>Автор</h1>
            <p>{ todoStore.title }</p>
            <p>{ todoStore.upperCasedTitle }</p>
        </>
    );
});

export default Todo;
