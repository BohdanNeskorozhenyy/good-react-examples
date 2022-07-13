/* Core */
import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { NavLink } from 'react-router-dom';

/* Components */
import { LoadingIndicator } from './LoadingIndicator';

/* Instruments */
import { api } from '../../api';

export const TodoList = (props) => {
    const todoListJSX
        = props.todos?.map((todo) => {
            return (
                <Todo
                    key = { todo.id } todo = { todo }
                    deleteTodo = { props.deleteTodo } />
            );
        }) ?? null;

    return (
        <>
            <h3>
                Все задачи
                { props.isLoading && ' загружаю...' }
                { props.isFetched && props.isFetching && ' подгружаю...' }
            </h3>
            <hr />

            <ul>
                <LoadingIndicator status = { props.status } data = { todoListJSX } />
            </ul>
        </>
    );
};

const Todo = (props) => {
    const client = useQueryClient();
    const [isFetching, setFetching] = useState(false);

    const deleteTodo = async () => {
        setFetching(true);
        await props.deleteTodo(props.todo.id);
    };

    const prefetch = () => {
        // client.prefetchQuery(['todos', props.todo.id], () =>
        //     api.fetchTodoById(props.todo.id),
        // );
    };

    return (
        <li onMouseEnter = { prefetch } key = { props.todo.id }>
            <NavLink to = { `/${props.todo.id}` }>{ props.todo.title }</NavLink>

            <button disabled = { isFetching } onClick = { deleteTodo }>
                ❌
            </button>
        </li>
    );
};
