import { observer } from 'mobx-react-lite';

export const TodoView = observer(({ todo }) => {
    const onToggleCompleted = () => {
        todo.completed = !todo.completed;
    };

    const onRename = () => {
        todo.task = prompt('Task name', todo.task) || todo.task;
    };

    return (
        <li onDoubleClick = { onRename }>
            <input
                type = 'checkbox'
                checked = { todo.completed }
                onChange = { onToggleCompleted } />
            { todo.task }
            { todo.assignee ? (
                <small> Assignee: { todo.assignee.name }</small>
            ) : null }
        </li>
    );
});
