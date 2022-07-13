// Core
import { configure, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

/*
* enforceActions
* observed — Всё состояние, которое где-то наблюдается, должно быть изменено с помощью действий.
* Позволяет создавать наблюдаемые свойства вне действий.
*
* never — Состояние может быть изменено из любого места.
*
* always — Состояние всегда должно быть изменено с помощью действий, что на практике также включает в себя создание.
* */

configure({
    enforceActions: 'always',
});

class Store {
    title = '';

    constructor() {
        makeObservable(this, {
            title: observable
        });
    }
};

const store = new Store();

const Todo = observer(() => {
    useEffect(() => {
        setTimeout(() => store.title = 'Изменённая задача', 3000);
    }, []);

    return (
        <>
            <h1>У MobX есть свои аля ESLint правила проверки</h1>
            <p>{store.title}</p>
        </>
    )
});

export default Todo;
