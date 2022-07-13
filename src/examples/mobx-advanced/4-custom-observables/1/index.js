// Core
import { observer } from 'mobx-react-lite';

// Other
import { useEffect, useState } from 'react';
import { clockStore } from './storages';

/**
 * В какой-то момент вам может понадобиться больше структур данных или других сущностей (например, потоков),
 * которые можно использовать в реактивных функциях. Достичь этого довольно просто, используя концепцию атомов.
 * Атомы могут использоваться для сигнализации MobX о том, что какой-то наблюдаемый источник данных был замечен или изменен,
 * и MobX будет сигнализировать об атоме всякий раз, когда он используется или больше не используется.
 * */
const Clock = observer(() => {
    const [isTimeStopped, setTimeStopped] = useState(false);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setTimeStopped(true);
        }, 5000);

        return () => clearTimeout(timerId);
    }, []);

    return (
        <>
            <h1>Текущие дата и время:</h1>
            <span>
                { !isTimeStopped && clockStore.getTime() }
            </span>
        </>
    );
});

export default Clock;
