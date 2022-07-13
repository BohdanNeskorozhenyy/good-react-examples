// Working with references
import { todoStore } from './store';
import { TodoList } from './components';

const Wrapper = () => {
    return <TodoList store = { todoStore } />;
};

export default Wrapper;

todoStore.todos[ 0 ].completed = !todoStore.todos[ 0 ].completed;
todoStore.todos[ 1 ].task = `Рандомная задач ${Math.round(Math.random() * 1000)}`;
todoStore.todos.push({ task: 'Успешно завершить курс!', completed: true });
