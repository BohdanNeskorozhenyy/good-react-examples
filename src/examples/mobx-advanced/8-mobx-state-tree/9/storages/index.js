// Core
import { types } from 'mobx-state-tree';

const Todo = types
    .model('Todo', {
        id:        Date.now(),
        todo:      types.string,
        completed: false,
    });

const TodosStore = types
    .model('TodosStore', {
        todos: types.array(Todo),
    })
    .actions((self) => ({
        addTodo(todo) {
            self.todos.push({ id: Date.now(), todo });
        },
    }));

export const todosStore = TodosStore.create({
    todos: [
        {
            todo: 'Посмотреть под микроскопом на MST',
        },
    ],
});
