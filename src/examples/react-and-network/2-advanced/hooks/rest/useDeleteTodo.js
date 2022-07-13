/* Core */
import { useState, useCallback } from 'react';

/* Instruments */
import { api } from '../../../api';
import { STATUS } from './status';

export const useDeleteTodo = () => {
    const [status, setStatus] = useState(STATUS.IDLE);

    const deleteTodo = useCallback(async (id) => {
        try {
            setStatus(STATUS.LOADING);
            await api.deleteTodo(id);
            setStatus(STATUS.SUCCESS);
        } catch (err) {
            setStatus(STATUS.ERROR);
            throw err;
        }
    });

    return { deleteTodo, status };
};
