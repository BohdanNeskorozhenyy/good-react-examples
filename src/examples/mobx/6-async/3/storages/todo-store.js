// Core
import { makeAutoObservable, runInAction } from 'mobx';

export class Todo {
    todos = [];

    constructor() {
        makeAutoObservable(this);
    }

    getTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => {
                runInAction(() => {
                    this.todos = data;
                });
            });
    }
}

export const todoStore = new Todo();
