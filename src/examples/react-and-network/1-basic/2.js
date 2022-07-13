/* Core */
import { useState, useEffect } from 'react';
import waait from 'waait';

/* Components */
import { TodoList } from './components';

const Example = () => {
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        (async () => {
            const API_URL = process.env.REACT_APP_API_URL;

            const response = await fetch(`${API_URL}/todos`);
            const todosResponse = await response.json();
            await waait(1000);

            setTodos(todosResponse);
        })();
    }, []);

    return <TodoList todos = { todos } />;
};

export default Example;
