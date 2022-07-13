// Core
import { makeAutoObservable } from 'mobx';

export class Todo {
    title = 'Текст задачи';

    constructor() {
        makeAutoObservable(this);
    }

    setTitle(value) {
        this.title = value;
    }
}

export const todoStore = new Todo();
