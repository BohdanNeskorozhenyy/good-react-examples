/* Core */
import { useParams } from 'react-router-dom';

/* Components */
import { TodoList, TodoView, ManageTodoForm } from './components';

/* Instruments */
import * as hooks from './hooks/rest';

export const TodoListView = () => {
    const fetchTodosQ = hooks.useFetchTodos();
    const createTodoM = hooks.useCreateTodo();
    const deleteTodoM = hooks.useDeleteTodo();

    const createTodoAsync = async (values) => {
        await createTodoM.createTodo(values);
        await fetchTodosQ.refetch();
    };

    const deleteTodoAsync = async (id) => {
        await deleteTodoM.deleteTodo(id);
        await fetchTodosQ.refetch();
    };

    return (
        <>
            <TodoList
                todos = { fetchTodosQ.todos }
                status = { fetchTodosQ.status }
                error = { fetchTodosQ.error }
                deleteTodo = { deleteTodoAsync } />

            <ManageTodoForm
                title = 'Создать задачу'
                status = { createTodoM.status }
                onSubmit = { createTodoAsync } />
        </>
    );
};

export const TodoByIdView = () => {
    const { todoId } = useParams();

    const {
        todo, status: fetchTodoStatus, error, refetch,
    } = hooks.useTodoById(
        todoId,
    );
    const { updateTodo, status: updateTodoStatus } = hooks.useUpdateTodo();

    const updateTodoAsync = async (values) => {
        try {
            await updateTodo(values);
            await refetch();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <TodoView
                status = { fetchTodoStatus } error = { error }
                todo = { todo } />

            <ManageTodoForm
                title = 'Обновить задачу'
                status = { updateTodoStatus }
                initialValues = { todo }
                onSubmit = { updateTodoAsync } />
        </>
    );
};
