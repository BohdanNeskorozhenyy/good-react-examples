/* Core */
import { useParams } from 'react-router-dom';

/* Components */
import { TodoList, TodoView, ManageTodoForm } from './components';

/* Instruments */
import * as hooks from './hooks/react-query';

export const TodoListView = () => {
    const fetchTodosQ = hooks.useFetchTodos();
    const createTodoM = hooks.useCreateTodo();
    const deleteTodoM = hooks.useDeleteTodo();

    return (
        <>
            <TodoList
                isFetched = { fetchTodosQ.isFetched }
                isLoading = { fetchTodosQ.isLoading }
                isFetching = { fetchTodosQ.isFetching }
                todos = { fetchTodosQ.data }
                status = { fetchTodosQ.status }
                error = { fetchTodosQ.error }
                deleteTodo = { deleteTodoM.mutateAsync } />

            <ManageTodoForm
                title = 'Создать задачу'
                status = { createTodoM.status }
                onSubmit = { createTodoM.mutateAsync } />
        </>
    );
};

export const TodoByIdView = () => {
    const { todoId } = useParams();

    const { data: todo, status: fetchTodoStatus, error } = hooks.useTodoById(
        todoId,
    );
    const {
        mutateAsync: updateTodo,
        status: updateTodoStatus,
    } = hooks.useUpdateTodo();

    return (
        <>
            <TodoView
                status = { fetchTodoStatus } error = { error }
                todo = { todo } />

            <ManageTodoForm
                title = 'Обновить задачу'
                status = { updateTodoStatus }
                initialValues = { todo }
                onSubmit = { updateTodo } />
        </>
    );
};
