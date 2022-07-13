import { TodoItem } from './TodoItem';

export const TodoList = ({ store }) => {
    // Рекомендуемый с точки зрения MobX путь передачи данных в компонент
    const todosJSX = store.todos.map((todo, index) => <TodoItem key = { index } todo = { todo } />);

    // const todosJSX = store.todos.map((todo, index) => <TodoItem key={index} task={todo.task} />);

    return <ol>{ todosJSX }</ol>;
};
