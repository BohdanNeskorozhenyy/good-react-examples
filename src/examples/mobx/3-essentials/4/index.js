/* Core */
import { observer } from 'mobx-react-lite';

/* Other */
import { observableTodoStore } from './store';

const Todo = observer(() => {
    return (
        <>
            <div>
                <button onClick = { () => observableTodoStore.addTodo('read MobX tutorial') }>
                    Добавить #1
                </button>
                &nbsp;
                <button onClick = { () => observableTodoStore.addTodo('try MobX') }>
                    Добавить #2
                </button>
            </div>
            <br />
            <div>
                <button onClick = { () => { observableTodoStore.todos[ 0 ].task = 'grok MobX tutorial'; } }>
                    Изменить текст задачи #1
                </button>
                &nbsp;
                <button onClick = { () => { observableTodoStore.todos[ 1 ].task = 'try MobX in own project'; } }>
                    Изменить текст задачи #2
                </button>
            </div>
            <br />
            <div>
                <button onClick = { () => { observableTodoStore.todos[ 0 ].completed = true; } }>
                    Завершить задачу #1
                </button>
                &nbsp;
                <button onClick = { () => { observableTodoStore.todos[ 1 ].completed = true; } }>
                    Завершить задачу #2
                </button>
            </div>
            <hr />
            <h1>Список задач:</h1>
            <ol>
                {
                    observableTodoStore.todos.map(({ task, completed }, index) => (
                        <li key = { index } >Статус: { task }. Завершена: { completed ? 'ДА' : 'НЕТ' }</li>
                    ))
                }
            </ol>
        </>
    );
});

export default Todo;
