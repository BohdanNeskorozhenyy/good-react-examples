// Core
import { makeAutoObservable } from 'mobx';

export class Todo {
    title = 'Текст задачи';

    constructor(rootStore) {
        makeAutoObservable(this, { rootStore: false });

        this.rootStore = rootStore;
    }

    setTitle(value) {
        this.title = value;
        this.rootStore.setIsLoading();
    }
}
