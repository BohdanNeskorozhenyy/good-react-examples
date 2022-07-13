// Core
import { configure, makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

/*
* reactionScheduler позволяет запустить реакции с задержкой
*
* Может использоваться с целью дебага или же визуализации задержки при обновлении компонента
* */
configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    observableRequiresReaction: true,
    reactionRequiresObservable: true,
    disableErrorBoundaries: true, // true — for debugging
    safeDescriptors: true, // false — for testing
    reactionScheduler: (func) => { // по необходимости
        console.log('Запуск реакции с задержкой в 2000мс');
        setTimeout(func, 2000);
    }
});

class Store {
    title = 'Текст задачи';

    constructor() {
        makeAutoObservable(this);
    }

    setTitle(value) {
        this.title = value;
    }
};

const store = new Store();

const Todo = observer(() => {
    useEffect(() => {
        setTimeout(() => {
            console.log('Измеение заголовка задачи');
            store.setTitle('Изменённый текст задачи');
        }, 5000);
    }, []);

    return (
        <>
            <h1>У MobX есть свои аля ESLint правила проверки</h1>
            <p>{ store.title }</p>
        </>
    )
});

export default Todo;
