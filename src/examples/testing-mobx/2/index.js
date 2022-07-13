import { TodoList } from './components';
import { todoStore } from './store';

const Wrapper = () => {
    return <TodoList store = { todoStore } />;
};

export default Wrapper;
