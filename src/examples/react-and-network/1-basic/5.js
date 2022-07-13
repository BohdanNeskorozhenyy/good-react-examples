/* Core */
import { useState } from 'react';

/* Components */
import { TodoList } from './components';

/* Instruments */
import { useFetchTodos } from './hooks';
import { api } from '../api';

const Example = () => {
    const [todos, setTodos] = useFetchTodos(null);
    const [newTodo, setNewTodo] = useState('');
    const [isFetching, setIsFetching] = useState(false);

    const createTodo = async () => {
        // document.documentElement.setAttribute('data-theme', 'light');

        if (newTodo.length < 3) {
            return null;
        }

        try {
            setIsFetching(true);

            const todoResponse = await api.createTodo({
                title: newTodo,
                body:  'x'.repeat(10),
            });
            setTodos([todoResponse, ...todos]);
            setNewTodo('');
        } catch (error) {
            // ? Обработка ошибок
            alert(`Упс! Что-то пошло не так: ${error.message}`);
        } finally {
            setIsFetching(false);
        }
    };

    console.log('todos', todos);

    const deleteTodo = async (todoId) => {
        await api.deleteTodo(todoId);

        const nextTodos = todos.filter((todo) => todo.id !== todoId);

        setTodos(nextTodos);
    };

    return (
        <TodoList
            todos = { todos }
            deleteTodo = { deleteTodo }
            isFetching = { isFetching }
            newTodo = { newTodo }
            setNewTodo = { setNewTodo }
            createTodo = { createTodo } />
    );
};

export default Example;
