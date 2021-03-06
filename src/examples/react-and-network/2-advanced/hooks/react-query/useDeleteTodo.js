/* Core */
import { useMutation, useQueryClient } from 'react-query';

/* Instruments */
import { api } from '../../../api';

export const useDeleteTodo = () => {
    const client = useQueryClient();

    const mutation = useMutation((todoId) => api.deleteTodo(todoId), {
        onMutate(...params) {
            console.log('1. onMutate', params);
            console.log('๐ฌ delete todo mutation fired');
        },
        onSuccess(...params) {
            console.log('2. onSuccess', params);
            console.log('โ todo was deleted');
        },
        onError(...params) {
            console.log('2. onError', params);
            console.log('โคฌ todo was not deleted');
        },
        onSettled(...params) {
            console.log('3. onSettled', params);
            console.log('๐ delete todo operation completed');
            client.invalidateQueries('todos');
        },
    });

    return mutation;
};
