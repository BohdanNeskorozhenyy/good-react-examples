/* Core */
import { useState, useCallback } from 'react';

/* Instruments */
import { api } from '../../../api';
import { STATUS } from './status';

export const useUpdateTodo = () => {
    const [status, setStatus] = useState(STATUS.IDLE);

    const updateTodo = useCallback(async (values) => {
        try {
            setStatus(STATUS.LOADING);

            await api.updateTodo(values);

            setStatus(STATUS.SUCCESS);
        } catch (err) {
            setStatus(STATUS.ERROR);
            throw err;
        }
    });

    return { updateTodo, status };
};
