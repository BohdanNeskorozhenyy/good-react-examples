// Core
import { configure, makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

/*
* disableErrorBoundaries
* По умолчанию MobX будет перехватывать и повторно выбрасывать исключения, происходящие в вашем коде, чтобы убедиться,
* что реакция в одном исключении не препятствует запланированному выполнению других, возможно, не связанных реакций.
*
* Устанавливайте значение этого свойства в true только на время дебага вашего приложения, в противном случае
* ваше приложение может находиться в неисправимом сломанном состоянии.
* */
configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    observableRequiresReaction: true,
    reactionRequiresObservable: true,
    disableErrorBoundaries: true
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
