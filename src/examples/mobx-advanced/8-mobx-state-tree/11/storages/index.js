// Core
import { addMiddleware, types } from 'mobx-state-tree';

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
    .preProcessSnapshot((snp) => {
        console.log('preProcessSnapshot', snp);

        return snp;
    })
    .postProcessSnapshot((snp) => {
        console.log('postProcessSnapshot', snp);

        return snp;
    })
    .actions((self) => ({
        afterCreate() {
            console.log('afterCreate hook');
        },
        addTodo(todo) {
            const todoObj = { id: Date.now(), todo };

            self.todos.push(todoObj);
        },
    }));

export const todosStore = TodosStore.create({
    todos: [
        {
            todo: 'Посмотреть под микроскопом на MST',
        },
    ],
});

/**
 * Мидлевар
 * mst-middlewares
 * */
addMiddleware(todosStore, (call, next, abort) => {
    console.log('call', call);
    console.log('next', next);
    console.log('abort', abort);

    next(call);

    // abort('some value');

    return 'value';
});
