// Core
import { makeAutoObservable } from 'mobx';

export class Todo {
    todos = [];

    constructor() {
        makeAutoObservable(this);
    }

    getTodos() {
        /**
         * [MobX] Since strict-mode is enabled,
         * changing (observed) observable values without using an action is not allowed.
         * Tried to modify: Todo@1.todos
         * */
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => {
                this.todos = data;
            });
    }
}

export const todoStore = new Todo();
