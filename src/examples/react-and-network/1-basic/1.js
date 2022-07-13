/* Core */
import { useState, useEffect } from 'react';
import waait from 'waait';

/* Components */
import { TodoList } from './components';

const Example = () => {
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch(
                'https://lab.lectrum.io/examples/api/v1/todos',
            );
            const todosResponse = await response.json();
            await waait(1000);

            setTodos(todosResponse);
        };

        fetchTodos();
    }, []);

    return <TodoList todos = { todos } />;
};

export default Example;
