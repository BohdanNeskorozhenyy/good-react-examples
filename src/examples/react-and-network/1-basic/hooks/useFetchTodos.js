/* Core */
import { useState, useEffect } from 'react';

/* Instruments */
import { api } from '../../api';

export const useFetchTodos = () => {
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        (async () => {
            const todosResponse = await api.fetchTodos();

            setTodos(todosResponse);
        })();
    }, []);

    /* async можно добавить и тут, но будут проблемы с TypeScript */
    // useEffect(async () => {
    //     const todosResponse = await api.fetchTodos();

    //     setTodos(todosResponse);
    // }, []);

    return [todos, setTodos];
};
