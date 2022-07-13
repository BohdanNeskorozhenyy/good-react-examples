// Core
import { observer } from 'mobx-react-lite';
import {
    observable, get, set, remove, has, runInAction,
} from 'mobx';
import { useEffect } from 'react';

const todo = observable({
    id:   Date.now(),
    todo: 'Закрепить работу с MobX',
    // deadline: new Date().toLocaleDateString()
});

/**
 * Эти утилиты позволяют манипулировать наблюдаемыми массивами, объектами и стурктурами данннымх Map/Set
 * с помощью одного и того же универсального API. Эти API-интерфейсы полностью реактивны, что означает,
 * что даже без поддержки Proxy-объекта MobX может обнаружить новые объявления свойств,
 * если для их добавления используется set.
 *
 * set(collection, key, value) или set(collection, { key: value })
 * remove(collection, key). При удалении элемента из массива используется метод splice.
 * has(collection, key)
 * get(collection, key)
 * */
const Todo = observer(() => {
    useEffect(() => {
        const timerId = setTimeout(() => {
            runInAction(() => {
                set(todo, 'todo', 'Разобраться с работой MobX утилит');
            });
        }, 2000);

        return () => clearTimeout(timerId);
    }, []);

    useEffect(() => {
        const timerId = setTimeout(() => {
            runInAction(() => {
                remove(todo, 'todo');
            });
        }, 4000);

        return () => clearTimeout(timerId);
    }, []);

    return (
        <>
            <h1>Утилиты</h1>
            <p>Todo: { get(todo, 'todo') || 'Текст задачи отсутствует' }</p>
            <p>Дедлайн: { has(todo, 'deadline') ? get(todo, 'deadline') : 'Задача безсрочная' }</p>
        </>
    );
});

export default Todo;
