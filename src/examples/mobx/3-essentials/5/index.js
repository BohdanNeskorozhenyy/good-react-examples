// Making React reactive
/* Other */
import { store } from './store';

/* Components */
import { TodoList } from './components';

const Wrapper = () => {
    return <TodoList store = { store } />;
};

export default Wrapper;

store.todos[ 0 ].completed = !store.todos[ 0 ].completed;
store.todos[ 1 ].task = `Рандомная задач ${Math.round(Math.random() * 1000)}`;
store.todos.push({ task: 'Успешно завершить курс!', completed: true });
