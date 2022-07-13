// Core
import { flow, makeAutoObservable } from 'mobx';

export class Todo {
    todos = [];

    constructor() {
        makeAutoObservable(this, {
            getTodos: flow,
        });
    }

    * getTodos() {
        const response = yield fetch('https://jsonplaceholder.typicode.com/todos');
        const data = yield response.json();

        this.todos = data;
    }
}

export const todoStore = new Todo();
