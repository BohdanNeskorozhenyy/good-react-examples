import { makeAutoObservable } from 'mobx';

class Todo {
    title = 'Тестовая задача';

    constructor() {
        makeAutoObservable(this);
    }
}

const store = new Todo();

export { store };
