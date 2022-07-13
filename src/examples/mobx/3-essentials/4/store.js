// Becoming reactive

/* Core */
import {
    makeObservable, observable, computed, action, autorun,
} from 'mobx';

class ObservableTodoStore {
    todos = [];
    pendingRequests = 0;

    constructor() {
        makeObservable(this, {
            /**
             * Using observable is like turning a property of an object into a spreadsheet cell.
             * But unlike spreadsheets, these values can not only be primitive values,
             * but also references, objects and arrays.
             */
            todos:           observable,
            pendingRequests: observable,

            /**
             * Anything that can be derived from the state without any further interaction is a derivation.
             *
             * MobX distinguishes between two kinds of derivations:
             * - Computed values, which can always be derived from the current observable state using a pure function
             * - Reactions, side effects that need to happen automatically when the state changes
             *
             * When starting with MobX, people tend to overuse reactions.
             * The golden rule is, always use computed if you want to create a value based on the current state.
             */
            completedTodosCount: computed,
            report:              computed,

            /**
             * An action is any piece of code that changes the state. User events,
             * backend data pushes, scheduled events, etc.
             * An action is like a user that enters a new value into a spreadsheet cell.
             *
             * It is recommended that you mark any piece of code that changes observable's as an action.
             * That way MobX can automatically apply transactions for effortless optimal performance.
             */
            addTodo: action,
        });

        /**
         * An autorun function is called a custom reaction, you will need them rarely.
         * Autorun creates a reaction that runs once, and after that automatically re-runs
         * whenever any observable data that was used inside the function changes.
         * Because report uses the observable todos property, it will print the report whenever appropriate.
         */
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

const observableTodoStore = new ObservableTodoStore();

export { observableTodoStore };
