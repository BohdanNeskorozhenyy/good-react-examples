import {
    action, autorun, computed, makeObservable, observable,
} from 'mobx';

class TodoStore {
    todos = [];
    pendingRequests = 0;

    constructor() {
        makeObservable(this, {
            todos:               observable,
            pendingRequests:     observable,
            completedTodosCount: computed,
            report:              computed,
            addTodo:             action,
        });
        autorun(() => console.log(this.report));
    }

    get completedTodosCount() {
        return this.todos.filter((todo) => todo.completed === true).length;
    }

    get report() {
        if (this.todos.length === 0) {
            return 'Нет тудушек';
        }

        return `Прогресс всего/выполнено: ${this.completedTodosCount}/${this.todos.length}`;
    }

    addTodo(task) {
        this.todos.push({
            task,
            completed: false,
            assignee:  null,
        });
    }
}

export const peopleStore = observable([{ name: 'Иван' }, { name: 'Андрей' }]);
export const todoStore = new TodoStore();

todoStore.addTodo('Пройти материалы по MobX');
todoStore.addTodo('Попробовать MobX на практике');
todoStore.todos[ 0 ].assignee = peopleStore[ 0 ];
todoStore.todos[ 1 ].assignee = peopleStore[ 1 ];
peopleStore[ 0 ].name = 'Александр';
