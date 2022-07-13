// Core
import { configure, makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

/*
* safeDescriptors
* MobX делает некоторые поля не настраиваемыми или недоступными для записи, чтобы предотвратить выполнение действий,
* которые не поддерживаются или, скорее всего, нарушат ваш код.
*
* устанавливайте значение этого свойств в false во время тестов что бы облегчить создание шпионов, моков, стабов
*
* Без особой нужды не устанавливать значение в false!!!
* */
configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    observableRequiresReaction: true,
    reactionRequiresObservable: true,
    disableErrorBoundaries: true,
    safeDescriptors: true
});

class Store {
    title = '';

    constructor() {
        makeAutoObservable(this);
    }
};

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
