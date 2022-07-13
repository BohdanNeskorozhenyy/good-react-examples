/* eslint-disable react-hooks/exhaustive-deps */
// Core
import wait from 'waait';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

// Other
import { Statuses } from './storages/ui-store';
import { useStores } from './hooks/useStores';

export const Todo: React.FC = observer(() => {
    const { ui, todo } = useStores();

    useEffect(() => {
        (async () => {
            await wait(2000);
            ui.setStatus(Statuses.IN_PROGRESS);

            await wait(2000);
            todo.setTitle('Подключить TypeScript к MobX');

            await wait(2000);
            await ui.setStatus(Statuses.FINISHED);
        })()
    }, []);

    const isTodoShown = ui.isLoading === Statuses.FINISHED || ui.isLoading === Statuses.IDLE;

    return (
        <>
            <h1>Комплексный пример MobX + TypeScript</h1>
            { ui.isLoading === Statuses.IN_PROGRESS && <p>Актуализирую список задач...</p> }
            { isTodoShown ? <p>Идентификатор: { todo.id }</p> : null }
            { isTodoShown ? <p>Задача: { todo.title }</p> : null }
        </>
    )
});
