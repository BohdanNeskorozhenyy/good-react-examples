// Core
import { useQuery } from 'react-query';

// Other
import { api } from '../api';

export const useUsers = () => {
    const query = useQuery('users', api.getUsers);

    return query;
};
