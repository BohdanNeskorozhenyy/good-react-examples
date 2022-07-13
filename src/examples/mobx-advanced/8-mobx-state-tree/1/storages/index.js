// Core
import { types } from 'mobx-state-tree';

/**
 * Модель представляет собой мутабельный но защищённый объект.
 *
 * Каждый объект содержит в себе информацию о структуре и о типах,
 * но в отличии от TypeScript эти проверки работает в рантайме.
 * */
const Todo = types
    .model('Todo', {
        id:        Date.now(),
        todo:      types.string,
        completed: false, // автоматически определяется тип и устанавливается дефолтное значение
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

/**
 * Метод 'create' используется для создания инстанса модели.
 * */
export const todosStore = TodosStore.create({
    todos: [
        {
            todo: 'Посмотреть под микроскопом на MST',
        },
    ],
});
