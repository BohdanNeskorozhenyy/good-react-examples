/* Core */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* Instruments */
import { api } from '../../../api';
import { STATUS } from './status';

export const useTodoById = (todoId) => {
    const navigate = useNavigate();

    const [todo, setTodo] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(STATUS.LOADING);

    const refetch = async () => {
        try {
            setStatus(STATUS.LOADING);

            const todoById = await api.fetchTodoById(todoId);

            if (!todoById) {
                navigate('/', { replace: true });

                return null;
            }

            setTodo(todoById);
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
        todo,
        status,
        error,
        refetch,
    };
};
