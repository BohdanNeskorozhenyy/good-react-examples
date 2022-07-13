/* Core */
import { QueryClientProvider, QueryClient } from 'react-query';

/* Instruments */
import { useUsers } from './hooks';

const queryClient = new QueryClient();

export const UsersView = () => {
    const { data } = useUsers();

    return (
        <>
            <ul>
                {
                    Array.isArray(data)
                        && data.map(({ id, name }) => <li key = { id }>{ name }</li>)
                }
            </ul>
        </>
    );
};

export const Wrapper = () => {
    return (
        <QueryClientProvider client = { queryClient }>
            <UsersView />
        </QueryClientProvider>
    );
};
