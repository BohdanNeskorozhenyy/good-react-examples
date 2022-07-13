/* Core */
import { useState, useCallback } from 'react';

/* Instruments */
import { api } from '../../../api';
import { STATUS } from './status';

export const useCreateTodo = () => {
    const [status, setStatus] = useState(STATUS.IDLE);

    const createTodo = useCallback(async (values) => {
        try {
            setStatus(STATUS.LOADING);
            await api.createTodo(values);
            setStatus(STATUS.SUCCESS);
        } catch (err) {
            setStatus(STATUS.ERROR);
            throw err;
        }
    });

    return { createTodo, status };
};
