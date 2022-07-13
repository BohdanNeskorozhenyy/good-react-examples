// Core
import { getEnv, types } from 'mobx-state-tree';

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
            const todoObj = { id: Date.now(), todo };

            self.todos.push(todoObj);
            // Dependency Injection
            getEnv(self).logger.log('addTodo', todoObj);
        },
    }));

export const todosStore = TodosStore.create({
    todos: [
        {
            todo: 'Посмотреть под микроскопом на MST',
        },
    ],
}, {
    logger: {
        log(actionName, message) {
            console.log('INFO', `[${new Date().toISOString()}]`, actionName, message);
        },
        warn(message) {
            console.warn([new Date().toISOString()], message);
        },
        error(message) {
            console.error([new Date().toISOString()], message);
        },
    },
});
