import { observer } from 'mobx-react-lite';

import { TodoView } from './TodoView';

export const TodoList = observer(({ store }) => {
    const onNewTodo = () => {
        store.addTodo('Сделать перерыв');
    };

    return (
        <div>
            <ul>
                { store.todos.map((todo, idx) => (
                    <TodoView todo = { todo } key = { idx } />
                )) }
            </ul>
            { store.pendingRequests > 0 ? <p>Загрузка...</p> : null }
            <div>
                <button onClick = { onNewTodo }>Новая задача</button>
            </div>
        </div>
    );
});
