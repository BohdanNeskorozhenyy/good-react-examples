// Core
import { configure, makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

/*
* reactionRequiresObservable
* Предупреждает, когда реакция (например, автозапуск, наблюдатель) создается без доступа к каким-либо наблюдаемым объектам.
* Используется для определения ненужных обёрток при помощи observer
* */
configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    observableRequiresReaction: true,
    reactionRequiresObservable: true
});

class Store {
    title = '';

    constructor() {
        makeAutoObservable(this);
    }
};

// eslint-disable-next-line no-unused-vars
const store = new Store();

const Todo = observer(() => {
    useEffect(() => {
        //
    }, []);

    return (
        <>
            <h1>У MobX есть свои аля ESLint правила проверки</h1>
            <p>В этом компоненте не использутся что-либо из хранилища</p>
        </>
    )
});

export default Todo;
