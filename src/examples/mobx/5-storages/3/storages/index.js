// Core
import { makeAutoObservable } from 'mobx';

// Other
import { Todo } from './todo-store';
import { UiStore } from './ui-store';

class RootStore {
    meta = 'Some Ver';

    constructor() {
        makeAutoObservable(this);
        this.ui = new UiStore(this);
        this.todo = new Todo(this);
    }
}

export const store = new RootStore();
