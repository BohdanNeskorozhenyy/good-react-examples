// Core
import { useRef, useState } from 'react';

// Other
import { todoStore } from './store';

const Todo = () => {
    const inputRef = useRef();
    // eslint-disable-next-line no-unused-vars
    const [_, setValue] = useState(0);

    const handleClick = () => {
        if (!inputRef.current || !inputRef.current.value) {
            return;
        }

        todoStore.addTodo(inputRef.current.value);
        setValue((prev) => prev + 1); // Force update
        inputRef.current.value = '';
    };

    const completeTodo = (todoIdx) => {
        todoStore.todos[ todoIdx ].completed = true;
        setValue((prev) => prev + 1); // Force update
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
            <p>{ todoStore.report() }</p>
            <ol>
                {
                    todoStore.todos.map(({ task, completed }, index) => <li
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
