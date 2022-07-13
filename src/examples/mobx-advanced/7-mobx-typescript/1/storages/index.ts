// Core
import { makeAutoObservable } from 'mobx';

// Other
import { TodoStore, ITodoStore } from './todo-store';
import { UiStore, IUiStore } from './ui-store';

export class RootStore {
    ui: IUiStore;
    todo: ITodoStore;

    constructor() {
        makeAutoObservable(this);
        this.ui = new UiStore(this);
        this.todo = new TodoStore();
    }
};

export const store = new RootStore();
