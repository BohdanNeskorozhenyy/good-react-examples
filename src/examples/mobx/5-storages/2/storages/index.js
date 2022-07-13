import { Todo } from './todo-store';
import { UiStore } from './ui-store';

export const store = new class RootStore {
    constructor() {
        this.ui = new UiStore(this);
        this.todo = new Todo(this);
    }
}();
