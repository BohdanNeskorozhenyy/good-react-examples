// Core
import { configure, makeAutoObservable } from 'mobx';
import { useEffect } from 'react';
import { observer } from "mobx-react-lite";

/*
* observableRequiresReaction
* Используйте это, если вы хотите проверить, используете ли вы наблюдаемые объекты за пределами MobX контекста.
* Это отличный способ найти любые недостающие обертки наблюдателей в React-компонентах.
* */
configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    observableRequiresReaction: true
});

class Store {
    title = 'Тестовая задача';

    constructor() {
        makeAutoObservable(this);
    }
};

const store = new Store();

const Todo = () => {
    useEffect(() => {
        //
    }, []);

    return (
        <>
            <h1>У MobX есть свои аля ESLint правила проверки</h1>
            <p>{store.title}</p>
        </>
    )
};

export default Todo;
