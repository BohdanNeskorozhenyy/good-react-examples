import {
    action, computed, makeObservable, observable,
} from 'mobx';

export class TodoStore {
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

export const todoStore = new TodoStore();
