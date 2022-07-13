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
    }))
    /**
     * views — предоставляют возможность создавать вычисляемые свойства и
     * инкапсулировать логику извлечения данных из хранилища.
     * */
    .views((self) => ({
        get uncompletedTodos() {
            const uncompleted = self.todos.filter(({ completed }) => completed);

            return `${uncompleted.length}/${self.todos.length}`;
        },
        getTodosWithDeadline() {
            /**
             * Инкапсуляция логики может облегчить работу, так как вносить изменения прийдётся в одном месте.
             *
             * Попытка изменения модели из views приведёт к ошибке.
             * */
            return self.todos.filter(({ deadline }) => Boolean(deadline));
        },
    }));

export const store = RootStore.create({
    authors: [
        {
            id:     `${Date.now()}a`,
            name:   'Жюль Верн',
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
