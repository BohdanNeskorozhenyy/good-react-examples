/* Core */
import { observer } from 'mobx-react-lite';

/* Components */
import { TodoView, RenderCount } from '.';

export const TodoList = observer(({ store }) => {
    const onNewTodo = () => {
        store.addTodo(prompt('Ввести новую задачу:', 'хочу перерыв'));
    };

    return (
        <div>
            { store.report }
            <ul>
                { store.todos.map((todo, idx) => (
                    <TodoView todo = { todo } key = { idx } />
                )) }
            </ul>
            { store.pendingRequests > 0 ? <p>Загрузка...</p> : null }
            <button onClick = { onNewTodo }>Новая задача</button>
            <small> (Двойной клик на туду для редактирования)</small>
            <RenderCount title = 'TodoList' />
        </div>
    );
});
