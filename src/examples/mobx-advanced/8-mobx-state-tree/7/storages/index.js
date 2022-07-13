// Core
import { types } from 'mobx-state-tree';

// Models
import { Author } from './author-store';
import { Todo } from './todo-store';

const RootStore = types
    .model('RootStore', {
        authors: types.optional(types.array(Author), []),
        todos:   types.optional(types.array(Todo), []),
    })
    .actions((self) => ({
        addTodo(todo) {
            self.todos.push({ id: `${Date.now()}t`, todo });
        },
        removeFirstItem() {
            self.authors.shift();
        },
    }));

export const store = RootStore.create({
    authors: [
        {
            id:     `${Date.now()}a`,
            name:   'Джон Доу',
            gender: 'm',
        },
    ],
    todos: [
        {
            id:   `${Date.now()}t`,
            todo: 'Посмотреть под микроскопом на MST',
        },
    ],
});
