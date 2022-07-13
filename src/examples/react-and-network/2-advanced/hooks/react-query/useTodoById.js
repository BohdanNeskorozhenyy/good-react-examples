/* Core */
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

/* Instruments */
import { api } from '../../../api';

export const useTodoById = (todoId) => {
    const navigate = useNavigate();
    const client = useQueryClient();

    const query = useQuery(
        ['todos', todoId],
        async () => {
            const todoById = await api.fetchTodoById(todoId);

            return todoById;
        },
        {
            placeholderData() {
                const todoPreview = client
                    .getQueryData('todos')
                    ?.find((todo) => todo.id === todoId);

                return (
                    todoPreview ?? {
                        title: 'запрашиваю данные 👩🏼‍🚀',
                        body:  '...давным давно, в далёкой галактике...',
                    }
                );
            },
            onError() {
                navigate('/'); // ? If no todo by id found.
            },
            retry:      2, // ? default: 3
            retryDelay: 2000, // ? default: double of 1000 on each attempt
        },
    );

    return query;
};
