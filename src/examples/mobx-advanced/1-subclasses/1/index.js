// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

// Other
import { todoWithAuthorStore } from './storages';

const Todo = observer(() => {
    useEffect(() => {
        todoWithAuthorStore.setAuthor('Жуль Верн');
    }, []);

    return (
        <>
            <h1>Автор</h1>
            <p>{ todoWithAuthorStore.author }</p>
        </>
    );
});

export default Todo;
