// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { spy } from 'mobx';

// Other
import { todoStore } from './storages';

spy((event) => {
    console.log(event);
});

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
