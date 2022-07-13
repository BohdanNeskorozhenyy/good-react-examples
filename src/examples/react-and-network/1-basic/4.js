/* Components */
import { TodoList } from './components';

/* Instruments */
import { useFetchTodos } from './hooks';

const Example = () => {
    const [todos] = useFetchTodos();

    return <TodoList todos = { todos } />;
};

export default Example;
