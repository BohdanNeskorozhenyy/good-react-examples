// Core
import { flow, types } from 'mobx-state-tree';

const Todo = types
    .model('Todo', {
        userId:    types.number,
        id:        types.identifierNumber,
        title:     types.string,
        completed: types.boolean,
    });

const TodosStore = types
    .model('TodosStore', {
        todos: types.array(Todo),
    })
    .actions((self) => {
        const fetchTodos = flow(function* () {
            const response = yield fetch('https://jsonplaceholder.typicode.com/todos');
            const data = yield response.json();

            self.todos.push(...data);
        });

        return { fetchTodos };
    });

export const todosStore = TodosStore.create({
    todos: [],
});
