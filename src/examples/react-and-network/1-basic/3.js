/* Core */
import { useState, useEffect } from 'react';

/* Components */
import { TodoList } from './components';

/* Instruments */
import { api } from '../api';

const Example = () => {
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        (async () => {
            const todosResponse = await api.fetchTodos();

            setTodos(todosResponse);
        })();
    }, []);

    return <TodoList todos = { todos } />;
};

export default Example;
