// Core
import nock from 'nock';
import { QueryClientProvider, QueryClient } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';

// Components
import { useUsers } from '../hooks';

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
    <QueryClientProvider client = { queryClient }>
        { children }
    </QueryClientProvider>
);

const fakeData = [
    {
        id:   1,
        name: 'John Doe',
    },
];

/**
 * Без импользования перехватчиков на подобие nock хуки использующие react-query
 * будут отправлть реальные запросы на сервер.
 * */
const interceptor = nock('https://jsonplaceholder.typicode.com')
    .get('/users')
    .reply(200, fakeData, { 'Access-Control-Allow-Origin': '*' });

describe('useUsers hook', () => {
    test('input with name email should exist', async () => {
        const { result, waitFor } = renderHook(() => useUsers(), { wrapper });

        await waitFor(() => {
            return result.current.isSuccess;
        });

        expect(result.current.data.data).toEqual(fakeData);
        interceptor.done();
    });
});
