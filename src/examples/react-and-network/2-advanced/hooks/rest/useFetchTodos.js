/* Core */
import { useState, useEffect } from 'react';

/* Instruments */
import { api } from '../../../api';
import { STATUS } from './status';

export const useFetchTodos = () => {
    const [todos, setTodos] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(STATUS.IDLE);

    const refetch = async () => {
        try {
            setStatus(STATUS.LOADING);
            const todoList = await api.fetchTodos();
            setTodos(todoList);
            setError(null);
            setStatus(STATUS.SUCCESS);
        } catch (err) {
            setError(err);
            setStatus(STATUS.ERROR);
        }
    };

    useEffect(() => {
        refetch();
    }, []);

    return {
        todos,
        status,
        error,
        refetch,
    };
};
