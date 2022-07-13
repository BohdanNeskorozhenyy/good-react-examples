// Core
import { useEffect, useRef, useState } from 'react';

// Other
import { todoStore } from './store';

const Todo = () => {
    const inputRef = useRef();
    const [todos, setTodos] = useState([]);
    const [progress, setProgress] = useState(todoStore.progress);

    useEffect(() => {
        todoStore.on('update', () => {
            setTodos(todoStore.todos);
            setProgress(todoStore.report());
        });
    }, []);

    const handleClick = () => {
        if (!inputRef.current || !inputRef.current.value) {
            return;
        }

        todoStore.addTodo(inputRef.current.value);
        inputRef.current.value = '';
    };

    const completeTodo = (todoIdx) => {
        // todoStore.todos[todoIdx].completed = true; // не приведёт к ререндеру компонента
        todoStore.completeTodo(todoIdx);
    };

    return (<>
        <input
            ref = { inputRef } name = 'todo'
            type = 'text' />
        <br />
        <button onClick = { handleClick }>
                Добавить туду
        </button>
        <hr />
        <section>
            <h1>Задачи:</h1>
            <p>{ progress }</p>
            <ol>
                {
                    todos.map(({ task, completed }, index) => <li
                        key = { index }
                        style = { { textDecoration: completed ? 'line-through' : 'none' } }
                        onClick = { () => completeTodo(index) }>
                        { task }
                    </li>)
                }
            </ol>
        </section>
    </>
    );
};

export default Todo;
