// Core
import { observer } from 'mobx-react-lite';
import {
    observable, values, keys, entries,
} from 'mobx';
import { useEffect } from 'react';

const todo = observable({
    id:   Date.now(),
    todo: 'Закрепить работу с MobX',
});

/**
 * values, keys и entries возвращают полноценные массивы
 * */
const Todo = observer(() => {
    useEffect(() => {
        console.log('values', values(todo));
        console.log('keys', keys(todo));
        console.log('entries', entries(todo)); // [['id', 1], ['todo', 'Закрепить работу с MobX']]
    }, []);

    return (
        <>
            <h1>Информация в консоли ;)</h1>
        </>
    );
});

export default Todo;
