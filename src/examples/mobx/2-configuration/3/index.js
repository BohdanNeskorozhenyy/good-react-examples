// Core
import { configure, makeAutoObservable, runInAction, autorun } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

/*
* computedRequiresReaction
* Запрещает прямой доступ к любому ненаблюдаемому вычисляемому значению извне действия или реакции.
* Это гарантирует, что вы не используете вычисленные значения таким образом, когда MobX не будет кэшировать их.
* */
configure({
    enforceActions: 'always',
    computedRequiresReaction: true
});

class Store {
    time = 0;
    title = '';

    constructor() {
        makeAutoObservable(this);
    }

    get delayedTime () {
        console.log('Вызов геттера — delayedTime');

        return this.time + 60 * 1000;
    }
};

const store = new Store();

const Todo = observer(() => {
    useEffect(() => {
        // V1
        console.log(store.delayedTime);
        console.log(store.delayedTime);

        // V2
        runInAction(() => {
            console.log(store.delayedTime);
            console.log(store.delayedTime);
        });

        // V3
        // autorun(() => {
        //     console.log(store.delayedTime);
        //     console.log(store.delayedTime);
        // });
    }, []);

    return (
        <>
            <h1>У MobX есть свои аля ESLint правила проверки</h1>
            <p>{store.title}</p>
        </>
    )
});

export default Todo;
