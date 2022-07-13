/* Core */
import { useQuery } from 'react-query';

/* Instruments */
import { api } from '../../../api';

export const useFetchTodos = () => {
    // const query = useQuery('todos');
    const query = useQuery('todos', api.fetchTodos);

    return query;
};
