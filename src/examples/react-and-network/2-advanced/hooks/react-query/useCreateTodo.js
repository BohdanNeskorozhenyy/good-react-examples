/* Core */
import { useMutation, useQueryClient } from 'react-query';

/* Instruments */
import { api } from '../../../api';

export const useCreateTodo = () => {
    const client = useQueryClient();

    const mutation = useMutation((newTodo) => api.createTodo(newTodo), {
        async onMutate(newTodo) {
            const prevTodos = await client.getQueryData('todos');

            await client.setQueryData('todos', (oldTodos) => [
                ...oldTodos,
                {
                    id: 'temp',
                    ...newTodo,
                },
            ]);

            return () => client.setQueryData('todos', prevTodos);
        },
        onError:   (error, values, rollback) => rollback(),
        onSettled: () => client.invalidateQueries('todos'),
    });

    return mutation;
};
