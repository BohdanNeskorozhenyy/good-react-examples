// Core
import { observer, useLocalObservable } from 'mobx-react-lite';
import { TodoList } from './components/TodoList';

const Todo = observer(() => {
    const store = useLocalObservable(() => ({
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
            <TodoList store = { store } />
        </section>
    </>
    );
});

export default Todo;
