import { observer } from 'mobx-react-lite';

/*
* dereference task property
* наблюдатель (observer) работает лучше если извлекать свойство объекта
* на как можно более поздних этапах.
*
* observer работает лучще если передавать объекты по ссылкам
*/
export const TodoItem = observer(({ todo }) => {
    return <li>{ todo.task }</li>;
});
