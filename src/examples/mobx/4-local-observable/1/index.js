// Core
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { observable } from 'mobx';

const Todo = observer(() => {
    const [store] = useState(() => observable({
        todos:      [],
        inputValue: '',
        addTodo(todo) {
            this.todos.push(todo);
            this.inputValue = '';
        },
        handleTodoInputChange(value) {
            this.inputValue = value;
        },
    }));

    const handleClick = () => {
        store.addTodo({ task: store.inputValue });
    };

    const handleTextChange = (event) => {
        const { value } = event.target;

        store.handleTodoInputChange(value);
    };

    return (<>
        <input
            onChange = { handleTextChange } name = 'todo'
            type = 'text' value = { store.inputValue } />
        <br />
        <button onClick = { handleClick }>
                Добавить туду
        </button>
        <hr />
        <section>
            <h1>Задачи:</h1>
            <ol>
                {
                    store.todos.map(({ task }, index) => <li
                        key = { index }>
                        { task }
                    </li>)
                }
            </ol>
        </section>
    </>
    );
});

export default Todo;
