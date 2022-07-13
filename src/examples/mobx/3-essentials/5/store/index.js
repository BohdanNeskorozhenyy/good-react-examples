/* Core */
import {
    makeObservable, observable, computed, action, autorun,
} from 'mobx';

class ObservableTodoStore {
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
        autorun(() => console.log(`%c[${new Date().toLocaleString()}] ${this.report}`, 'background: #222; color: #bada55'));
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

const store = new ObservableTodoStore();

store.addTodo('Пройти материалы по MobX');
store.addTodo('Попробовать MobX на практике');

export { store };
