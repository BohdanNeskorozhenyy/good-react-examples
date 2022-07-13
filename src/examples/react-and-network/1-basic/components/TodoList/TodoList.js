/* Components */
import { Todo } from './Todo';

/* Instruments */
import './styles.scss';

export const TodoList = (props) => {
    let todosJSX = props.todos?.map((todo) => {
        return <Todo
            key = { todo.id } todo = { todo }
            deleteTodo = { props.deleteTodo } />;
    }) ?? <h2>Загрузка...</h2>;

    if (props.todos !== null && props.todos?.length === 0) {
        todosJSX = <h2>✅ Задач нет</h2>;
    }

    return (
        <section className = 'todo-list'>
            <h1>📩 Мои задачи</h1>

            { props.createTodo && (
                <div>
                    <input
                        disabled = { props.isFetching }
                        value = { props.newTodo }
                        placeholder = 'Новая задача...'
                        onChange = { (e) => props.setNewTodo(e.target.value) } />
                    <button
                        disabled = { props.isFetching }
                        onClick = { props.createTodo }>
                        Создать задачу
                    </button>
                </div>
            ) }

            <ul>{ todosJSX }</ul>
        </section>
    );
};
