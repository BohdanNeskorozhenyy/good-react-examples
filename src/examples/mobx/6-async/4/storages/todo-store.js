// Core
import { makeAutoObservable, runInAction } from 'mobx';

export class Todo {
    todos = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getTodos() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();

        runInAction(() => {
            this.todos = data;
        });
    }
}

export const todoStore = new Todo();
