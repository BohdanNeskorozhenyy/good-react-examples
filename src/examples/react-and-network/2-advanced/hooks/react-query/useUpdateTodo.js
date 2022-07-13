/* Core */
import { useMutation, useQueryClient } from 'react-query';

/* Instruments */
import { api } from '../../../api';

export const useUpdateTodo = () => {
    const client = useQueryClient();

    const mutation = useMutation((values) => api.updateTodo(values), {
        async onMutate(newTodo) {
            const cacheKey = ['todos', newTodo.id];

            const prevTodo = await client.getQueryData(cacheKey);
            await client.setQueryData(cacheKey, (oldTodo) => ({
                ...oldTodo,
                ...newTodo,
            }));

            /**
             * ? Проброс функции для отката в качестве аргумента «context»:
             * ? - onSuccess(x, y, context)
             * ? - onError(x, y, context)
             * ? - onSettled(x, y, z, context)
             */
            return () => client.setQueryData(cacheKey, prevTodo);
        },
        onError: (error, values, rollback) => rollback(), // ? Делаем откат, если возникла ошибка.
        async onSettled(_, __, newTodo) {
            /**
             * ? Не зависимо от сценария (успех/ошибка),
             * ? инвалидиурем данные по ключу в кеше для того,
             * ? чтобы query подтянуло свежие (настоящие) данные — мы ведь Optimistic Updates делаем!
             */
            await client.invalidateQueries(['todos', newTodo.id]);
        },
    });

    return mutation;
};
