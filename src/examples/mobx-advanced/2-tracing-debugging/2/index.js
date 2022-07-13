// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { autorun } from 'mobx';

// Other
import { todoStore } from './storages';

autorun((reaction) => {
    reaction.trace();
    /**
     * Важно обратиться к свойству что бы трейс произошел правильно.
     * в противном случае MobX не будет знать за каким свойством следить.
     * */
    console.log(todoStore.title);
});

const Todo = observer(() => {
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
