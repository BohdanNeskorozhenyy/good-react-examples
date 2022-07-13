// Core
import { makeAutoObservable } from 'mobx';

export class Todo {
    title = 'Текст задачи';

    constructor() {
        makeAutoObservable(this);
    }

    get upperCasedTitle() {
        return this.title.toUpperCase();
    }

    setTitle(value) {
        this.title = value;
    }
}

export const todoStore = new Todo();
