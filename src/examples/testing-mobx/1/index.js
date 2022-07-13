/* Core */
import { observer } from 'mobx-react-lite';

// mobx-react-lite — only for functional components
// mobx-react for FC & class components

/* Store */
import { timerStore } from './store';

/**
 * An observer HOC converts React components into derivations of the data they render.
 * When using MobX there are no smart or dumb components.
 * All components render smartly, but are defined in a dumb manner.
 * MobX will simply make sure the components are always re-rendered whenever needed, and never more than that.
 */
const Timer = observer(() => {
    return (
        <>
            <h1>Счётчик: { timerStore.secondsPassed }</h1>
            <button onClick = { () => timerStore.reset() }>
                Сброс
            </button>
            <hr />
            <p>Обновлено: { new Date().toLocaleTimeString() }</p>
        </>
    );
});

/**
 * The observer HoC automatically subscribes React components to any observables that are used during rendering.
 * As a result, components will automatically re-render when relevant observables change.
 * It also makes sure that components don't re-render when there are no relevant changes.
 * So, observables that are accessible by the component, but not actually read, won't ever cause a re-Рендер.
 */

export default Timer;

/**
 * Изменяет свойство в хранилище,
 * которое ПРИВОДИТ к перерисовке компонента
 * */
setInterval(() => {
    timerStore.increment();
}, 1000);
